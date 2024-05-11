#include <bits/stdc++.h>
#define FOR(i,a,b) for (int i = (a); i < (b); i++)
#define ROF(i,a,b) for (int i = (b)-1; i >= (a); --i)
#define FORE(i, a) for(auto i : a)
#define FORC(cont, it) for(typeof((cont).begin()) it = (cont).begin(); it != (cont).end(); it++)
#define ull unsigned long long
#define ll long long
#define ld long double
#define clr(v, d) memset(v, d, sizeof(v))
#define vt vector
#define pb push_back
#define sz(v) ((int)(v).size())
#define all(v) (v).begin(),(v).end()
#define erase_duplicates(x) x.erase(unique(all(x)),x.end());
#define fi first
#define se second
#define deb(x) cout << #x << ": "<< x << '\n';
#define ENDL '\n'
using namespace std;
 
using pi = pair<int,int>;
using pl = pair<ll,ll>;
using pd = pair<double,double>;

using vi = vt<int>;
using vb = vt<bool>;
using vl = vt<ll>;
using vd = vt<double>;
using vs = vt<string>;
using vpi = vt<pi>;
using vpl = vt<pl>;
using vpd = vt<pd>;
#define lb lower_bound
#define ub upper_bound
 
template<class T> int lwb(vt<T>& a, const T& b) { return int(lb(all(a),b)-begin(a)); }
template<class T> int upb(vt<T>& a, const T& b) { return int(ub(all(a),b)-begin(a)); }
 
template <typename T> std::istream& operator>>(std::istream& input, std::vector<T>& data){ for(T& x : data)input >> x;return input;}
template <typename T> std::ostream& operator<<(std::ostream& stream, const vector<T>& vec){ for(size_t i = 0; i < vec.size(); i++){stream << vec[i];if(i != vec.size() - 1)stream << ' ';}; return stream; }

template<class T> bool umin(T& a, const T& b) { return b < a ? a = b, 1 : 0; }
template<class T> bool umax(T& a, const T& b) { return a < b ? a = b, 1 : 0; }

const int dx[8]  = {-1,-1,-1, 0,0, 1,1,1};
const int dy[8]  = {-1, 0, 1,-1,1,-1,0,1};
const int d4x[4]  = {-1, 0, 0,1};
const int d4y[4]  = {0, 1,-1, 0};

const double PI = acos(-1.0);
const int INF = INT_MAX;
const int INFNEG = INT_MIN;
const ll int MOD = 1e9+7;
const double EP = 1E-10;

bool myCompare(pair<char,int> p1, pair<char,int> p2){
    return p1.fi>p2.fi;
}       

const int mxN = 1e6 + 10; 
void solve(){
    set<char> st = {'a','e','i','o','u'};
    string s1,s2;cin>>s1>>s2;
   
    bool flag1,flag2;
    flag1 = flag2 = false;
    char v1;
    string t1,t2;
 t1+=s1[0];
    t2+=s2[s2.length()-1];
    FOR(i,1,s1.length()){
        if(st.count(s1[i])){
            flag1=true;
            v1 = s1[i];
            break;
        }else{
            t1+=s1[i];
        }
    }
    char v2;
    for (int i = s2.length()-2; i >= 0; i--)
    {
            if(st.count(s2[i])){
                flag2=true;
                v2 = s2[i];
                        break;

            }else{
                t2+=s2[i];
            }
    }
    reverse(all(t2));
    if(flag2){
        cout << t1 << v2 << t2<< "\n";
    }else if(flag1 && !flag2){
        cout << t1 << v1 << t2<< "\n";
    }
    else if(!flag1 && !flag2){
        cout << t1 << "o" << t2 << "\n";
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    // freopen("input.txt","r",stdin);
    // freopen("output.txt","w",stdout);

    int t = 1, i = 0;
    // cin >> t;    
    while (t--){
        // cout<<"Case "<<++i<<": ";
        solve();
    }
} 
/*
*/ 

// se vuelve más fácil
// cada día es un poco más fácil, pero tienes que hacerlo cada día
// esa es la parte difícil, pero se vuelve más fácil    