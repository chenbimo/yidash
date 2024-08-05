import { describe, it, expect } from 'vitest';
import yd_file_dataURLtoFile from '../lib/file/dataURLtoFile.js';

describe('yd_file_dataURLtoFile', () => {
    it('将Base64 DataURL转换为文件对象', () => {
        const dataurl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFt3Y6uAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABh0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uMy4xLjEsIGh0dHA6Ly9tYXRwbG90bGliLm9yZy+j8jJIAAAAKdJREFUOI3tk79Lw1AUx3+fP2lKgUGKwWCwQhNvYwJjIcMjRjJpVgQd5eQgPlIImZzGWaIqYw+VwZkZMb3M6e4vB7vPz9fXv3f3tLm7Y2Nj/8lY3ZmRjg2V8HJxn2ZsZfL6i9fXx+g/1C1Yi4eHJ7OZfYfI8lZsVtP0ZtP0pk4VYlP6AQLBAJwMjBW7Xf9a5Z/Zw0+4hDpUw1T4QeUdRcBlwR7rK9wRv8Dee4Z8mzZ7Kx1e0f9v7Mf7+JxT4Y9y9w7r8H+cJ7+fQV9sJfW9O+1oKv7j1i1cZJ7U2Lr2y+9vPv5G4z/9h8V3G8R3G8J3G7NzV6x/4EAAAAASUVORK5CYII=';
        const filename = 'image.png';

        const result = yd_file_dataURLtoFile(dataurl, filename);

        expect(result).toBeInstanceOf(File);
        expect(result.name).toBe(filename);
        expect(result.type).toBe('image/png');
    });

    it('处理没有指定文件名的情况', () => {
        const dataurl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1QAA';
        const result = yd_file_dataURLtoFile(dataurl);

        expect(result).toBeInstanceOf(File);
        expect(result.name).toBe('filename');
        expect(result.type).toBe('image/jpeg');
    });
});
