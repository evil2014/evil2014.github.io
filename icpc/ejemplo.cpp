#include <bits/stdc++.h>
using namespace std;

const int N=5050;
const int inf=1e9+7;
int a[N],b[N];

int main(){
    int t;
    scanf("%i",&t);
    while(t--){
        int n;
        scanf("%i",&n);
        for(int i=1;i<=n;i++)scanf("%i",&a[i]);
        for(int i=1;i<=n;i++)scanf("%i",&b[i]);
        sort(a+1,a+1+n);
        sort(b+1,b+1+n);
        int ans=0;
        for(int offs=0;offs<=n;offs++){
            int now=inf;
            for(int i=1;i<=offs;i++){
                now=min(now,abs(a[i]-b[n-offs+i]));
            }
            for(int i=offs+1;i<=n;i++){
                now=min(now,abs(a[i]-b[i-offs]));
            }
            ans=max(ans,now);
        }
        printf("%i\n",ans);
    }
    return 0;
}