/*
https://leetcode.com/problems/design-hashmap/description/

Design HashMap

Design a HashMap without using any built-in hash table libraries.
Implement the MyHashMap class:
MyHashMap() initializes the object with an empty map.

void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.

int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.

void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 

Example 1:
Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 
Constraints:
0 <= key, value <= 106
At most 104 calls will be made to put, get, and remove.
*/

class ListNode(val key: Int = 0, var value: Int = 0, var next: ListNode? = null) {}

class HashMap() {
    private val hashmap = Array<ListNode>(1000) { ListNode(-1,-1,null) }

    private fun hash(key: Int): Int {
        return key % hashmap.size
    }

    fun put(key: Int, value: Int) {
        var cur: ListNode? = hashmap[hash(key)]
        var prev: ListNode? = null
        while (cur != null) {
            if (cur.key == key) {
                cur.value = value
                return
            }
            prev = cur
            cur = cur.next
        }
        prev!!.next = ListNode(key, value, null)
    }

    fun get(key: Int): Int {
        var cur: ListNode? = hashmap[hash(key)]
        while (cur != null) {
            if (cur.key == key) {
                return cur.value
            }
            cur = cur.next
        }
        return -1
    }

    fun remove(key: Int) {
        var cur: ListNode? = hashmap[hash(key)]
        while (cur != null && cur.next != null) {
            if (cur.next!!.key == key) {
                cur.next = cur.next!!.next
                return
            }
            cur = cur.next
        }
    }
}

val myHashMap = HashMap()
myHashMap.put(1, 1)
myHashMap.put(2, 2)
assert (myHashMap.get(1) == 1) {"Couldn't get key (1) = 1"}
assert (myHashMap.get(3) == -1) {"Couldn't get key (3) = -1"}
myHashMap.put(2, 1)
assert (myHashMap.get(2) == 1) {"Couldn't get key (2) = 1"}
myHashMap.remove(2)
assert (myHashMap.get(2) == -1) {"Couldn't get key (2) = -1"}
