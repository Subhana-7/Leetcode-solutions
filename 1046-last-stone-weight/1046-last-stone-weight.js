/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }

        parent(i) { return Math.floor((i - 1) / 2); }
        left(i) { return 2 * i + 1; }
        right(i) { return 2 * i + 2; }

        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }

        bubbleUp(i) {
            while (i > 0 && this.heap[i] > this.heap[this.parent(i)]) {
                this.swap(i, this.parent(i));
                i = this.parent(i);
            }
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            const max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0);

            return max;
        }

        bubbleDown(i) {
            let largest = i;
            let left = this.left(i);
            let right = this.right(i);

            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if (largest !== i) {
                this.swap(i, largest);
                this.bubbleDown(largest);
            }
        }

        peek() {
            return this.heap[0];
        }
    }

    let heap = new MaxHeap();

    for (let stone of stones) {
        heap.push(stone);
    }

    while (heap.heap.length > 1) {
        let x = heap.pop();
        let y = heap.pop();

        if (x !== y) {
            heap.push(x - y);
        }
    }

    return heap.heap.length ? heap.peek() : 0;
};