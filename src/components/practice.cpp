#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll gcd_ll(ll a,ll b){
    while(b){
        ll t=b;
        b=a%b;
        a=t;
    }
    return a;
}
/*
EDGE CASES:
In My Drone Delivery code, edge cases could be:

One drone has 0 deliveries, the other has many.

Both drones have the same charging time, causing overlaps.

Very large delivery numbers that approach 1e18.*/
bool canfinish(ll T,ll charge1, ll delivery1,ll charge2,ll delivery2){
    ll c1=T/charge1;
    ll c2=T/charge2;

    ll lcm=charge1/gcd_ll(charge1,charge2)*charge2;
    ll c12=T/lcm;

    ll total_charge=c1+c2-c12;
    ll total_slot= T-total_charge;

    ll avail1=T-c1;
    ll avail2=T-c2;

    return(delivery1<=avail1 && delivery2<= avail2 && delivery1+delivery2<=total_slot);
}
/*
3️⃣ Test with Extreme Cases

Smallest case: 1 drone, 0 deliveries.

Largest case: deliveries and time near 1e18.

Same charging times → overlapping schedules.

One drone idle, other busy.*/
long long mindeliverytime(int charge1,long long delivery1,int charge2,long long delivery2){
    ll left=0,right=1e18,ans=right;

    while(left<=right){
        ll mid=left+(right-left)/2;
        if(canfinish(mid,charge1,delivery1,charge2,delivery2)){
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