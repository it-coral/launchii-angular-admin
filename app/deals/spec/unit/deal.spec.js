(function() {
    'use strict';

    describe('Deals service', function() {
        var $controller, DealService;

        beforeEach(angular.mock.module('ui.router'));
        // beforeEach(angular.mock.module('app.deals.highlightadd'));
        // beforeEach(angular.mock.module('app.deals.highlightedit'));
        // beforeEach(angular.mock.module('app.deals.highlightfield'));
        beforeEach(angular.mock.module('app.deals'));

        beforeEach(function() {

            module(function($provide) {
                $provide.value('CONST', jasmine.createSpy('CONST'));
                $provide.value('brandPrepService', { brands: [] });
                $provide.value('HelperService', { getPrevState: jasmine.createSpy('getPrevState') });
                $provide.value('prepSelBrand', jasmine.createSpy('prepSelBrand'));
                $provide.value('BrandService', jasmine.createSpy('DealService'));
                $provide.value('dealPrepService', { deals: jasmine.createSpy('deals') });
                $provide.value('prepTemplateNames', jasmine.createSpy('prepTemplateNames'));
                $provide.value('prepTemplateTypes', jasmine.createSpy('prepTemplateNames'));
                $provide.value('prepSelDeal', jasmine.createSpy('prepSelDeal'));
                $provide.value('prepSelHighlights', jasmine.createSpy('prepSelHighlights'));
                $provide.value('prepSelTemplates', jasmine.createSpy('prepSelTemplates'));
                $provide.value('prepStandardD', { concat: Array.prototype.concat });
                $provide.value('prepEarlyBirdD', jasmine.createSpy('prepEarlyBirdD'));
                $provide.value('prepDealImages', jasmine.createSpy('prepDealImages'));
                $provide.value('prepUpsellDeals', jasmine.createSpy('prepUpsellDeals'));
                $provide.value('prepUpsellAssocs', jasmine.createSpy('prepUpsellAssocs'));
            });

        });

        beforeEach(inject(function(_DealService_) {
            DealService = _DealService_;
        }));

        it('should exist', function() {
            expect(DealService).toBeDefined();
        });

        it('should have the required attributes', function() {
            expect(DealService.getAll).toBeDefined();
            expect(DealService.search).toBeDefined();
            expect(DealService.lists).toBeDefined();
            expect(DealService.add).toBeDefined();
            expect(DealService.edit).toBeDefined();
            expect(DealService.delete).toBeDefined();
            expect(DealService.find).toBeDefined();
        });

        it('should get all deals', function() {
            DealService.getAll().then(function(result) {
                expect(result).toBeDefined();
            });
        });

        it('should search for a deal', function() {
            var searchStr = "Mock Deal";
            DealService.search(searchStr).then(function(result) {
                expect(result).toBeDefined();
            });
        });

        it('should add a deal', function() {
            var searchStr = "Mock Deal";
            DealService.search(searchStr).then(function(result) {
                expect(result).toBeDefined();
            });
        });

        describe('Deal dashboard controller', function() {

            var scope, DealController, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                DealController = $controller('DealController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(DealController).toBeDefined();
            });

            it('should have the required attributes', function() {
                expect(DealController.deals).toBeDefined();
                expect(DealController.getDeals).toBeDefined();
                expect(DealController.response).toBeDefined();
                expect(DealController.deleteDeal).toBeDefined();
                expect(DealController.search).toBeDefined();
                expect(DealController.clearSearch).toBeDefined();
                expect(DealController.isDealEmpty).toBeDefined();
            });

            it('should have pre fectched deal list', function() {
                expect(DealController.prepDeals).toBeDefined();
                expect(DealController.deals).toBeDefined();
            });

            it('should get the deal list', function() {
                DealController.getDeals().then(function(result) {
                    expect(result).toBeDefined();
                });
            });

            it('should return true if deal list is empty', function() {
                DealController.prepDeals.total = 0;
                expect(DealController.isDealEmpty()).toBeTruthy();
            });

            it('should return false if deal list is not empty', function() {
                DealController.prepDeals.total = 1;
                expect(DealController.isDealEmpty()).toBeFalsy();
            });

        });

        describe('Deal add controller', function() {

            var scope, controller, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                controller = $controller('DealAddController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(controller).toBeDefined();
            });

        });

        describe('Deal edit controller', function() {

            var scope, controller, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                controller = $controller('DealEditController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(controller).toBeDefined();
            });

        });

        describe('Deal view controller', function() {

            var scope, controller, httpBackend;

            beforeEach(inject(function($controller, $rootScope, $httpBackend) {

                scope = $rootScope.$new();
                httpBackend = $httpBackend;

                controller = $controller('DealViewController', {
                    $scope: scope,
                    $http: $httpBackend
                });
            }));

            it('should exist', function() {
                expect(controller).toBeDefined();
            });

        });

    });
})();
