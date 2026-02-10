
/*Uses binary search to find the minimum time needed.

canFinish() checks feasibility: accounts for 
drone charging intervals, overlap (via LCM), 
and ensures deliveries fit into available slots.

Core idea: schedule deliveries under time and 
charging constraints.

So, binary search is like a “divide and conquer” 
guessing game — you don’t check everything, you keep 
halving the options.

In the Drone Delivery code, binary search is used to 
quickly find the minimum time instead of trying every 
possible time one by one.*/

#include<bits/stdc++.h>//#include <bits/stdc++.h> is a non-standard GCC (GNU C++) header that includes almost every standard C++ library in one go.
using namespace std;//In C++, many standard library features (like cout, cin, vector, string) are inside the std namespace.

typedef long long ll;//In C++, typedef is used to give a new name (alias) to an existing data type.
//Think of it as creating a shortcut for a long or complex type.

ll gcd_ll(ll a, ll b){
    while(b){
        ll t=b;
        b=a %b;
        a=t;
    }
    return a;
}
bool canFinish(ll T,ll charge1,ll delivery1,ll charge2, ll delivery2){
    ll c1=T/charge1;
    ll c2=T/charge2;
    ll lcm=charge1/gcd_ll(charge1,charge2)*charge2;
    ll c12=T/lcm;

    ll total_charging=c1+c2-c12;
    ll total_slots=T-total_charging;

    ll avail1= T-c1;
    ll avail2=T- c2;

    return(delivery1<=avail1&& delivery2<=avail2 && delivery1+delivery2<=total_slots);


}
long long mindeliverytime(int charge1,long long delivery1,int charge2,long long delivery2){
    ll left=0,right=1e18,ans=right;

    while(left<=right){
        ll mid=left+(right-left)/2;
        if(canFinish(mid,charge1,delivery1,charge2,delivery2)){
            ans=mid;
            right=mid-1;

        }else{
            left=mid+1;
        }
    }
    return ans;
}
int main(){
    int charge1=2,charge2=2;
    long long delivery1=1,delivery2=3;
    cout<<mindeliverytime(charge1,delivery1,charge2,delivery2)<<endl;

    return 0;
}