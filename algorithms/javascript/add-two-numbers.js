/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    l1_bak = []
    l1_source = l1
    l2_bak = []
    l2_source = l2
    
    while (true) {
        l1_bak.push(l1_source.val)
        if (l1_source.next) {
            l1_source = l1_source.next
            continue
        }
        break
    }

    
    while (true) {
        l2_bak.push(l2_source.val)
        if (l2_source.next) {
            l2_source = l2_source.next
            continue
        }
        break
    }

    loop_1 = l1_bak
    loop_2 = l2_bak
    if (l2_bak.length > l1_bak.length) {
        loop_1 = l2_bak
        loop_2 = l1_bak
    }
    l2_len = loop_2.length

    plus_1 = 0
    plus_2 = 0
    plus_3 = 0
    more = false
    ans = []

    for (i in loop_1) {
        if (l2_len >= parseInt(i) + 1) {
            plus_2 = loop_2[i]
        } else {
            plus_2 = 0
        }
        plus_1 = loop_1[i]
        plus_3 = parseInt(plus_1) + parseInt(plus_2)

        if (more) {
            plus_3 += 1
            more = false
        }

        if (plus_3 >= 10) {
            more = true
        }

        len = plus_3.toString().length
        last = plus_3.toString().substr(len - 1, len + 1)
        ans.push(parseInt(last))
    }

    if (more) {
        ans.push(1)
    }

    return createL(ans)
};

function L(val){
    this.val = val;
    this.next = null;
}

function createL(a){
    let node, temp;
    for(let i=a.length-1; i >= 0; i--){
        if(!node)
            node = new L(a[i]);
        else {
            temp = new L(a[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}
