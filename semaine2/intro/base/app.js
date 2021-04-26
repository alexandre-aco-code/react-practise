const arr = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

const arr1 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
            // examiner le premier element et le deuxieme
            // si le premier element est plus grand que le deuxieme
            // on echange leur position
            // Sinon on fait rien.

// const reversed = arr.reverse();

// console.log(reversed);

const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr1[i + 1]) {

        let firstElement = arr2[i];

        arr2[i] = arr[i + 1];
        arr2[i + 1] = firstElement;
    } else {
        // return console.log("rien ne bouge")
    }
}

console.table(arr2);

function mettredanslordre(arr) {
    let min;

    for (let i = 0; i < arr.length; i++) {
        min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
    }

}