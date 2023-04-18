#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>
sem_t db;
pthread_mutex_t mutex;
int ar[100];
int x=0;
int y=0;
int reader_cnt = 0;

void *writer(void *arg)
{   
    sem_wait(&db);
    int y=x+5;
    while(x<y)
    {
        ar[x]=rand()%900;
        printf("Writer wrote number %d into location %d of the array\n",ar[x],x);//Writer wrote number 238 into location 0 of the array
        x++;
    }
    sem_post(&db);
    return NULL;

}
void *reader(void *rno)
{  
    pthread_mutex_lock(&mutex);
    reader_cnt++;
    if(reader_cnt == 1) {
        sem_wait(&db);
    }
    pthread_mutex_unlock(&mutex);
    int temp=y+5;
    while(y<temp)
    {
    printf("Reader %d: read number %d from location  %d of the array\n",*((int *)rno),ar[y],y);    y++;
    }
    y=temp-5;
    pthread_mutex_lock(&mutex);
    reader_cnt--;
    if(reader_cnt == 0) {
        sem_post(&db);
    }
    pthread_mutex_unlock(&mutex);
    return NULL;
}

int main()
{   

    pthread_t read[4],write;
    pthread_mutex_init(&mutex, NULL);
    sem_init(&db,0,1);
    int b[5] = {1,2,3,4,5};
        pthread_create(&write, NULL, (void *)writer,NULL);
    for(int i = 0; i <4; i++) {
        pthread_create(&read[i], NULL, (void *)reader, (void *)&b[i]);
    }
    pthread_join(write,NULL);
    for(int i = 0; i <4; i++) {
        pthread_join(read[i], NULL);
    }
    pthread_mutex_destroy(&mutex);
    sem_destroy(&db);
    return 0;
}

