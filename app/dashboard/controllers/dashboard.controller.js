(function() {
    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['DashboardService', 'HelperService', '$window', '$log'];

    /* @ngInject */
    function DashboardController(DashboardService, HelperService, $window, $log) {
        var vm = this;

        vm.summaryLoaded = false;
        vm.registeredUserCount = 0;
        vm.claimedCouponCount = 0;
        vm.couponClaimedValue = '';
        vm.registeredVendorCount = 0;
        vm.runningDealCount = 0;

        vm.summaryError = null;

        vm.basicReport = null;
        vm.basicChartData = null;
        vm.firstLoadingFinished = false;

        vm.analyticsError = null;

        activate();

        function activate() {
            vm.page_title = "Dashboard";

            getSummary();

            requestBasicReport();
        }

        function getSummary() {
            DashboardService.fetchSummary().then(function(resp) {

                vm.registeredUserCount = resp.registered_user_count;
                vm.claimedCouponCount = resp.claimed_coupon_count;
                vm.couponClaimedValue = resp.coupon_claimed_value;
                vm.registeredVendorCount = resp.registered_vendor_count;
                vm.runningDealCount = resp.running_deal_count;

                vm.summaryLoaded = true;

            }).catch(function(err) {
                vm.summaryError = err.data == null ? 'Something went wrong.' : err.data.errors;
            })
        }

        function requestBasicReport() {
            DashboardService.getGAReportingData('basic').then(function(reports) {

                if (reports.error) {
                    vm.analyticsError = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }

                if (!reports.reports || !reports.reports[0].data.rows) {
                    vm.basicReport = null;
                    vm.firstLoadingFinished = true;
                    return;
                }

                vm.basicReport = reports.reports[0];
                vm.firstLoadingFinished = true;

                // Build the chart data
                vm.basicChartData = [];
                for (var i = 0; i < vm.basicReport.data.rows.length; i ++) {
                    var chartItem = {
                        dimension: vm.basicReport.data.rows[i].dimensions[0],
                        sessionsValue: vm.basicReport.data.rows[i].metrics[0].values[1],
                        completions2Value: vm.basicReport.data.rows[i].metrics[0].values[5]
                    }
                    vm.basicChartData.push(chartItem);
                }

                // configure chart
                var chart = new AmCharts.AmSerialChart();
                chart.dataProvider = vm.basicChartData;
                chart.categoryField = "dimension";
                var legend = new AmCharts.AmLegend();
                legend.useGraphSettings = true;
                chart.addLegend(legend);

                // configure category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;

                // configure session graph
                var graph1 = new AmCharts.AmGraph();
                graph1.valueField = "sessionsValue";
                graph1.type = "line";
                graph1.bullet = "round";
                graph1.lineColor = "blue";
                graph1.balloonText = "[[category]]: <b>[[value]]</b>";
                graph1.title = "Sessions";
                chart.addGraph(graph1);

                // configure shop now graph
                var graph2 = new AmCharts.AmGraph();
                graph2.valueField = "completions2Value";
                graph2.type = "line";
                graph2.bullet = "diamond";
                graph2.lineColor = "red";
                graph2.balloonText = "[[category]]: <b>[[value]]</b>";
                graph2.title = "Shop - Now Clicks";
                chart.addGraph(graph2);

                chart.write("basic-report-chart");

            }).catch(function(err) {
                $log.log(err);
                vm.analyticsError = 'Something went wrong.'
            });
        }

    }
})();
