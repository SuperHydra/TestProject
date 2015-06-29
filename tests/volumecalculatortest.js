/*global describe, beforeEach, it*/

'use strict';

describe('VolumeCalculatorTest', function () {
    var VolumeCalculator;

    beforeEach(module('oneHydraMini'));

    beforeEach(inject(function (_VolumeCalculator_) {
        VolumeCalculator = _VolumeCalculator_;
    }));

    it('returns array of volumes', function () {
        expect(VolumeCalculator.getFutureVolume({
            volume: 1,
            percentage: 1
        }, 3)).toEqual(['2.00', '4.00', '8.00']);
    });

    it('zero values return zeros', function () {
        expect(VolumeCalculator.getFutureVolume({
            volume: 0,
            percentage: 0
        }, 4)).toEqual(['0.00', '0.00', '0.00', '0.00']);
    });

    it('0.5 percentage increases volume by half each step', function () {
        expect(VolumeCalculator.getFutureVolume({
            volume: 1,
            percentage: 0.5
        }, 4)).toEqual(['1.50', '2.25', '3.38', '5.07']);
    })

});
