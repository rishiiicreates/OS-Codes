#include <stdio.h>
#include <stdlib.h>
#define M 600005
int B[M],S[M],V[M],nv,qa[M],qb[M];char qt[M];
int compare(const void *a,const void *b){return (*(int*)a>*(int*)b)-(*(int*)a<*(int*)b);}
void update(int i,int n,int x){for(;i<=n;i+=i&-i)B[i]+=x;}
int qry(int i){int s=0;for(;i;i-=i&-i)s+=B[i];return s;}
int fpos(int v,int n){int l=0,r=n;while(l<r){int m=(l+r)/2;if(V[m]<=v)l=m+1;else r=m;}return l;}
int main(){
int n,q,i,u=0;char t;
scanf("%d%d",&n,&q);
for(i=1;i<=n;i++)scanf("%d",S+i),V[nv++]=S[i];
for(i=0;i<q;i++){scanf(" %c%d%d",&t,qa+i,qb+i);qt[i]=t;if(t=='!')V[nv++]=qb[i];else V[nv++]=qa[i],V[nv++]=qb[i];}
qsort(V,nv,4,compare);
for(i=0;i<nv;i++)if(!i||V[i]!=V[i-1])V[u++]=V[i];
for(i=1;i<=n;i++)update(fpos(S[i],u),u,1);
for(i=0;i<q;i++){
if(qt[i]=='!'){int k=qa[i],x=qb[i];if(S[k])update(fpos(S[k],u),u,-1);S[k]=x;update(fpos(x,u),u,1);}
else printf("%d
",qry(fpos(qb[i],u))-qry(fpos(qa[i]-1,u)));
}
return 0;
}