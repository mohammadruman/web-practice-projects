#include <iostream>
#include <string>
using namespace std;
string fun(string A)
{
    if (A == "Z")
    {
        return "B";
    }
    else
    {
        return A + fun(A.erase(0, 1));
    }
}
int main()
{
    string x = "ABCZ";
    cout << fun(x);
    return 0;
}