#include<iostream>
#include<string>
using namespace std;

bool naiveSearch(string text,string pattern){
    int n=text.length();
    int m=pattern.length();
    for(int i=0;i<=n-m;i++){
        int j;
        for(j=0;j<m;j++){
            if(text[i+j] !=pattern[j])
            break;
        }
        if(j==m)return true;
    }
    return false;
}
int main(){
    string text="abcabc";
    string pattern ="abc";
    if(naiveSearch(text,pattern))
        cout<<"pattern found!"<<endl;
    else
        cout<<"pattern not found"<<endl;

    return 0;
}