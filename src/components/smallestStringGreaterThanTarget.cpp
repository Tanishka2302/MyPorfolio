/*"Strings are sequences of characters that support operations like concatenation with +,
 repetition with *, indexing to access individual characters, and slicing to extract 
 substrings. Common methods include len() for length, split() for tokenizing, replace() 
 to substitute characters, and upper()/lower() for case conversion. Importantly, strings 
 are immutable in most languages, so operations return new strings rather than modifying
  in place."

"Lexicographic order is dictionary-like comparison: we compare strings character
 by character using their ASCII or Unicode values. If all characters match but
  one string is shorter, the shorter string is considered smaller. For example,
   'app' < 'apple' is true, 'apple' < 'banana' is true, and 'Zebra' < 'apple' is
    true because uppercase letters have lower ASCII values than lowercase letters."

"Edge cases to be aware of include empty strings, which come first in comparison 
('' < 'a'), case sensitivity, whitespace and special characters, and digits, which
 are compared according to ASCII values. For case-insensitive comparison, we can
  normalize strings using .lower() or .upper() before comparing. This approach 
  ensures correctness in all scenarios."*/


#include <bits/stdc++.h>
using namespace std;

// Function to check if a prefix can eventually form a string > target
bool is_viable(const string& prefix, vector<int>& remaining_counts, const string& target) {
    int p_len = prefix.length();
    if (p_len > target.length()) return true;

    int cmp = prefix.compare(0, p_len, target, 0, p_len);
    if (cmp > 0) return true;
    if (cmp < 0) return false;

    int target_idx = p_len;
    for (int c_code = 25; c_code >= 0; --c_code) {
        for (int k = 0; k < remaining_counts[c_code]; ++k) {
            if (target_idx >= target.length()) return true;

            char max_char = 'a' + c_code;
            if (max_char > target[target_idx]) return true;
            if (max_char < target[target_idx]) return false;
            target_idx++;
        }
    }
    return false;
}

// Function to build the lexicographically smallest string > target
string retrieveData(string firstinfo, string secondinfo) {
    vector<int> counts(26, 0);
    for (char ch : firstinfo) counts[ch - 'a']++;

    int n = firstinfo.length();
    string result = "";
    for (int i = 0; i < n; ++i) {
        bool char_found = false;
        for (char c = 'a'; c <= 'z'; ++c) {
            int c_idx = c - 'a';
            if (counts[c_idx] > 0) {
                counts[c_idx]--;
                if (is_viable(result + c, counts, secondinfo)) {
                    result += c;
                    char_found = true;
                    break;
                } else {
                    counts[c_idx]++;
                }
            }
        }
        if (!char_found) return "-1";
    }
    return (result.compare(secondinfo) > 0) ? result : "-1";
}

int main() {
    string firstInfo, secondInfo;

    cout << "Enter firstInfo: ";
    getline(cin, firstInfo);

    cout << "Enter secondInfo: ";
    getline(cin, secondInfo);

    string result = retrieveData(firstInfo, secondInfo);

    cout << "Result: " << result << endl;
    return 0;
}
