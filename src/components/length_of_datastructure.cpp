#include<string>
#include<iostream>


using namespace std;


int main(){
    string s="abc";
    cout<<"length of string :"<<s.length()<<endl;
    for (char ch:s){
        cout<<ch<<" ";
    }
    cout<<endl;

    string sub=s.substr(1,2);
    cout<<"Substring s[1:3]:"<<sub<<endl;

    string t="abd";
    if(s<t){
        cout<<s<<" is lexicographically smaller than "<<t<<endl;
    }
    else if(s>t){
        cout<<s<<" is lexicographically greater than "<<t<<endl;
    }
    else{
        cout<<s<<" is equal to "<<t<<endl;
    }
    return 0;
}