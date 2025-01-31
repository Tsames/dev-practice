'''


'''

from __future__ import annotations

class ListNode:
    def __init__(self, key: int = None, value: int = None, next: ListNode = None):
        self.key = key
        self.value = value
        self.next = next

class MyHashMap:

    def __init__(self):
        self.hashmap = [ListNode() for i in range(1000)]

    def hash(self, key: int) -> int:
        return key % len(self.hashmap)

    def put(self, key: int, value: int) -> None:
        cur = self.hashmap[self.hash(key)]
        while cur:
            if cur.key == key:
                cur.value = value
                return
            cur = cur.next
            
        cur.next = ListNode(key, value, None)
            

    def get(self, key: int) -> int:
        cur = self.hashmap[self.hash(key)]
        
        while cur:
            if cur.key == key:
                return cur.value
            cur = cur.next
        
        return -1
        
    def remove(self, key: int) -> None:
        cur = self.hashmap[self.hash(key)]
        
        while cur and cur.next:
            if cur.next.key == key:
                cur.next = cur.next.next
                return
            cur = cur.next

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)