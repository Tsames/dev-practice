class ListNode(var value: Int = 0, var next: ListNode? = null) {
    override fun toString(): String {
        var res = ""
        var node: ListNode? = this
        while (node != null) {
            res += "(${node.value}) -> "
            node = node.next
        }

        return res
    }
}

fun createFromList(nodes: List<Int>): ListNode {
    val root = ListNode(nodes[0])
    var curr = root

    for (i in 1 until nodes.size) {
        val newNode = ListNode(nodes[i])
        curr.next = newNode
        curr = newNode
    }

    return root
}