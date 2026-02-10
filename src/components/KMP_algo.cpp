#include<bits/std++.h>
using namespace std;

vector<int> computeLPS(string pattern){
    int m=pattern.length();
    vector<int> lps(m,0);
    int len=0;
    int i=1;

    while(i<m){
        if(pattern[i]==pattern[len]){
            len++;
            lps[i]=len;
            i++;
        }else{
            if(len!=0){
                len=lps[len-1];
                i++;
            }else{
                lps[i]=0;
                i++;
            }
        }
    }
    return lps;
}

bool KMP(string text,string pattern){
    int n=text.length();
    int m=pattern.length();
    vector <int> lps=computeLPS(pattern);

    int i=0;j=0;
    while(i<n){
        if(text[i]==pattern[j]){
            i++;j++;

        }
        if(j==m){
            return true;
        }
        else if(i<n && text[i]!=pattern[j]){
            if(j!=0) j=lps[j-1];
            else i++;
        }
            
        }
        return false;
    }
    int main(){
        string text="ABABDABACDABABCABAB";
        string pattern= "ABABCABAB";
         if (KMP(text, pattern)) cout << "Pattern found!\n";
    else cout << "Pattern not found.\n";

    return 0;
    }
