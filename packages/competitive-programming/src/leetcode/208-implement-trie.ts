/*
https://leetcode.com/problems/implement-trie-prefix-tree/description/

208. Implement Trie (Prefix Tree)

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True


Constraints:

1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.
 */

class TrieNode {
    endOfWord: boolean;
    children: Record<string, TrieNode> | null;

    constructor(children: Record<string, TrieNode>, endOfWord: boolean) {
        this.endOfWord = endOfWord;
        this.children = children;
    }
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode({}, false)
    }

    insert(word: string): void {
        let node = this.root;

        for (let character of word.split('')) {
            const children = node.children;
            if (children[character]) {
                node = children[character]
            } else {
                children[character] = new TrieNode({}, false);
                node = children[character];
            }
        }

        node.endOfWord = true;
    }

    search(word: string): boolean {
        let node = this.root;

        for (let character of word.split('')) {
            const children = node?.children;

            if (children && !children[character]) return false

            node = children[character] || new TrieNode({}, false)
        }

        return node.endOfWord;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;

        for (let character of prefix.split('')) {
            const children = node.children;

            if (!children[character]) return false

            node = children[character]
        }

        return true;
    }
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'));
console.log(trie.search('app'));
console.log(trie.startsWith('app'));
trie.insert('app');
console.log(trie.search('app'));