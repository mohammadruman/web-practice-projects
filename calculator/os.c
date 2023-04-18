
#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>
sem_t tm;
pthread_mutex_t mutex;
int wordswritten = 0;
int readerreads =0;
int array[100];
int a=0;
int y=0;

int readercount ;
readercount =0;
void *writer(void *arg)
{   
    int noofword =0;
    sem_wait(&tm);
    int y=a+5;
    do
    {
         array[a]=rand()%1000;
        printf("Writer wrote number %d into address given %d of the array \n",array[a],a);
        wordswritten = wordswritten+1;
        a=a+1;
    } 
    while (a<y);
    sem_post(&tm);
    return NULL;
    return noofword;

}
void *reader(void *reader_no)
{  
   
    pthread_mutex_lock(&mutex);
    readercount = readercount+1;
    if(readercount == 1) {
       
        sem_wait(&tm);
    }
    pthread_mutex_unlock(&mutex);
    int temporary=y+5;
    
    while(y<temporary)
    {
    printf("Reader %d: read number %d from address  %d \n",*((int *)reader_no),array[y],y);
    readerreads = readerreads+1;
    y++;
    }
    y=temporary-5;
    
    pthread_mutex_lock(&mutex);
    readercount--;
    if(readercount == 0) {
        sem_post(&tm);
    }
    pthread_mutex_unlock(&mutex);
    return NULL;
}

int main()
{   
    pthread_t read_from_that[4],wrote_in_file;
    pthread_mutex_init(&mutex, NULL);
    sem_init(&tm,0,1);
    int b[5] = {1,2,3,4,5};
        pthread_create(&wrote_in_file, NULL, (void *)writer,NULL);
    for(int i = 0; i <4; i++) {
        pthread_create(&read_from_that[i], NULL, (void *)reader, (void *)&b[i]);
    }
    pthread_join(wrote_in_file,NULL);
    for(int i = 0; i <4; i++) {
        pthread_join(read_from_that[i], NULL);
    }
    pthread_mutex_destroy(&mutex);
    sem_destroy(&tm);
    return 0;
}