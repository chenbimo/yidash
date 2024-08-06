import { describe, it, expect } from 'vitest';
import toTree from './toTree';

describe('yd_array_to_tree', () => {
    it('should convert an array to a tree structure', () => {
        const arr = [
            { id: 1, parent_id: 0 },
            { id: 2, parent_id: 1 },
            { id: 3, parent_id: 1 },
            { id: 4, parent_id: 2 },
            { id: 5, parent_id: 2 }
        ];

        const expectedTree = [
            {
                id: 1,
                parent_id: 0,
                children: [
                    {
                        id: 2,
                        parent_id: 1,
                        children: [
                            { id: 4, parent_id: 2 },
                            { id: 5, parent_id: 2 }
                        ]
                    },
                    { id: 3, parent_id: 1 }
                ]
            }
        ];

        const result = toTree(arr, 'id', 'parent_id', 'children');
        expect(result).toEqual(expectedTree);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const expectedTree = [];
        const result = toTree(arr, 'id', 'parent_id', 'children');
        expect(result).toEqual(expectedTree);
    });

    it('should handle an array with no parent-child relationships', () => {
        const arr = [
            { id: 1, parent_id: 0 },
            { id: 2, parent_id: 0 },
            { id: 3, parent_id: 0 }
        ];

        const expectedTree = [
            { id: 1, parent_id: 0 },
            { id: 2, parent_id: 0 },
            { id: 3, parent_id: 0 }
        ];

        const result = toTree(arr, 'id', 'parent_id', 'children');
        expect(result).toEqual(expectedTree);
    });

    it('should handle custom id and parentId keys', () => {
        const arr = [
            { ID: 1, PARENT_ID: 0 },
            { ID: 2, PARENT_ID: 1 },
            { ID: 3, PARENT_ID: 1 },
            { ID: 4, PARENT_ID: 2 },
            { ID: 5, PARENT_ID: 2 }
        ];

        const expectedTree = [
            {
                ID: 1,
                PARENT_ID: 0,
                children: [
                    {
                        ID: 2,
                        PARENT_ID: 1,
                        children: [
                            { ID: 4, PARENT_ID: 2 },
                            { ID: 5, PARENT_ID: 2 }
                        ]
                    },
                    { ID: 3, PARENT_ID: 1 }
                ]
            }
        ];

        const result = toTree(arr, 'ID', 'PARENT_ID', 'children');
        expect(result).toEqual(expectedTree);
    });
});
