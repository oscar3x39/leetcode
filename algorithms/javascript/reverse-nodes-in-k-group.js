/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    head_bak = ""
    head_source = head
    
    while (true) {
        head_bak += head_source.val
        if (head_source.next) {
            head_source = head_source.next
            continue
        }
        break
    }
    
    chunk = chunkArray(head_bak, k)

    ans = ''
    for (i in chunk) {
        if (chunk[i].length >= k) {
            ans += reverse(chunk[i])
        } else {
            ans += chunk[i]
        }
    }
    
    return createL(ans)
};

function reverse(s){
    return s.split("").reverse().join("");
}

function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

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
