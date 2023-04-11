#include <iostream>
using namespace std;

int main()
{
    int countOfNonzero = 0;
    int num;

    cin >> num;
    while (num != -100)
    {
        if (num != 0)
        {
            cout << num << " occurred" << endl;
            countOfNonzero++;
        }
        else
        {
            cout << 0 << endl;
        }
        cin >> num;
    }

    cout << "Non-zero integers occur " << countOfNonzero << " time(s)" << endl;

    return 0;
}
