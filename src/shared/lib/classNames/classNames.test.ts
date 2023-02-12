import { classNames } from 'shared/lib/classNames/classNames';

describe('Classnames test', () => {
    test('test', () => {
        expect(classNames('class1')).toBe('class1');
    });
    test('test with array', () => {
        expect(classNames('class1', {}, ['class2', 'class3']))
            .toBe('class1 class2 class3');
    });
    test('test with array and mods', () => {
        const resultExpectation = 'class1 class2 class3 hovered scrollable';
        expect(classNames(
            'class1',
            { hovered: true, scrollable: true },
            ['class2', 'class3'],
        ))
            .toBe(resultExpectation);
    });
    test('test with array and mods false', () => {
        const resultExpectation = 'class1 class2 class3 hovered';
        expect(classNames(
            'class1',
            { hovered: true, scrollable: false },
            ['class2', 'class3'],
        ))
            .toBe(resultExpectation);
    });
    test('test with array and mods undefined', () => {
        const resultExpectation = 'class1 class2 class3 scrollable';
        expect(classNames(
            'class1',
            { hovered: undefined, scrollable: true },
            ['class2', 'class3'],
        ))
            .toBe(resultExpectation);
    });
});
