let list = [7, 23, 42, 36, 50, 20]
let Biggest_Number = 50
for (let index = 0; index <= list.length - 1; index++) {
    if (list[index] < Biggest_Number) {
        Biggest_Number = list[index]
    }
}
serial.writeValue("smallest number is", Biggest_Number)
