classes={
   "car":0,
   "fish":1,
   "house":2,
   "tree":3,
   "bicycle":4,
   "guitar":5,
   "pencil":6,
   "clock":7
}

def readFeatureFile(fileName):
    f = open(fileName, 'r')
    lines = f.readlines()

    X = []
    Y = []

    for i in range(1, len(lines)):
        row = lines[i].split(',')
        X.append([float(row[j]) for j in range(len(row) - 1)])
        Y.append(classes[row[-1].strip()])

    return (X, Y)

from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier(n_neighbors=50, algorithm='brute', weights='uniform')

X,Y = readFeatureFile('../data/dataset/training.csv')

knn.fit(X,Y)

X,Y = readFeatureFile('../data/dataset/testing.csv')

accuracy = knn.score(X,Y)
print('Accuracy: ', accuracy)