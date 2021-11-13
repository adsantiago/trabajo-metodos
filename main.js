function pivoteo(matriz) {
    thex1 = []
    thex2 = []
    thex3 = []
    thex4 = []
    thex5 = []
    matrizNew = []
    if (matriz[0][0][0] == 0) {
        for (i = 0; i < number; i++) {
            for (j = 0; j <= number; j++) {
                if(number == 2){
                    if (i == 0) {
                        thex1.push(matriz[1][0][j])
                    }
                    if (i == 1) {
                        thex2.push(matriz[0][0][j])
                    }
                }
                if(number == 3){
                    if (i == 0) {
                        thex1.push(parseFloat(matriz[2][0][j]))
                    }
                    if (i == 1) {
                        thex2.push(parseFloat(matriz[0][0][j]))
                    }
                    if(i == 2){
                        thex3.push(parseFloat(matriz[1][0][j]))
                    }
                }
                if (number == 4) {
                    if (i == 0) {
                        thex1.push(matriz[3][0][j])
                    }
                    if (i == 1) {
                        thex2.push(matriz[0][0][j])
                    }
                    if (i == 2) {
                        thex3.push(matriz[1][0][j])
                    }
                    if(i == 3){
                        thex4.push(matriz[2][0][j])
                    }
                }
                if (number == 5) {
                    if (i == 0) {
                        thex1.push(matriz[4][0][j])
                    }
                    if (i == 1) {
                        thex2.push(matriz[0][0][j])
                    }
                    if (i == 2) {
                        thex3.push(matriz[1][0][j])
                    }

                    if (i == 3) {
                        thex4.push(matriz[2][0][j])
                    }
                    if(i == 4){
                        thex5.push(matriz[3][0][j])
                    }
                }
            }
        }
        if (number == 2) {
            matrizNew = [[thex1], [thex2]]
        }
        if (number == 3) {
            matrizNew = [[thex1], [thex2], [thex3]]
        }
        if (number == 4) {
            matrizNew = [[thex1], [thex2], [thex3], [thex4]]
        }
        if (number == 5) {
            matrizNew = [[thex1], [thex2], [thex3], [thex4], [thex5]]
        }
        return matrizNew
    }
    else {
        return matriz
    } 
}

function Gaus2x2() {
    matrizNorm11 = matriz22

    for (i = 0; i < number; i++) {
        value1 = matriz22[1][0][0]
        value2 = matriz22[0][0][0]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm11[i][0][j] = matrizNorm11[i][0][j] / value2
            }
            if (i == 1) {
                matrizNorm11[i][0][j] = parseFloat(matrizNorm11[i][0][j] - (matrizNorm11[i - 1][0][j] * value1))
            }
        }
    }

    for (i = 0; i < number; i++) {
        value = matrizNorm11[i][0][1]
        for (j = 0; j <= number; j++) {
            if (i == 1) {
                matrizNorm11[i][0][j] = parseFloat(matrizNorm11[i][0][j] / value)
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm11[0][0][1]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm11[i][0][j] = parseFloat(matrizNorm11[i][0][j] - value1 * matrizNorm11[i + 1][0][j])
            }
        }
    }

    x1 = matrizNorm11[0][0][2]
    x2 = matriz22[1][0][2]

    decimalRound = document.getElementById("number-decimal").value
    finalRound = 10 ** decimalRound

    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    final_solution.innerHTML += `<p></p>`
    final_solution.innerHTML += `<h4> SOLUCIÓN</h4>`
    final_solution.innerHTML += `<h4> x1 = ${Math.round(x1 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x2 = ${Math.round(x2 * finalRound) / finalRound}</h4>`
}

function Gaus3x3(matriz33) {
    matrizNorm3 = matriz33
    for (i = 0; i < number; i++) {
        value1 = matriz33[0][0][0]
        value2 = matriz33[1][0][0]
        value3 = matriz33[2][0][0]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm3[i][0][j] = parseFloat(matrizNorm3[i][0][j] / value1)
            }
            if (i == 1) {
                matrizNorm3[i][0][j] = parseFloat(matrizNorm3[i][0][j] - (matriz33[i - 1][0][j] * value2))
            }
            if (i == 2) {
                matrizNorm3[i][0][j] = parseFloat(matrizNorm3[i][0][j] - (matriz33[i - 2][0][j]) * value3)
            }
        }
    }

    for (i = 0; i < number; i++) {
        value = matriz33[1][0][1]
        value2 = matriz33[2][0][1]
        for (j = 0; j <= number; j++) {
            if (i == 1) {
                matrizNorm3[i][0][j] = parseFloat(matrizNorm3[i][0][j] / value)
            }

            if (i == 2) {
                matrizNorm3[i][0][j] = parseFloat(matrizNorm3[i][0][j] - (matrizNorm3[i - 1][0][j] * value2))
            }
        }
    }

    for (i = 0; i < number; i++) {
        value = matrizNorm3[2][0][2]
        for (j = 0; j <= number; j++) {
            if (i == 2) {
                matrizNorm3[i][0][j] = parseFloat(matrizNorm3[i][0][j] / value)
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm3[0][0][2];
        value2 = matrizNorm3[1][0][2];
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm3[i][0][j] = parseFloat((-value1) * matrizNorm3[2][0][j] + matriz33[0][0][j])
            }
            if (i == 1) {
                matrizNorm3[i][0][j] = parseFloat((-value2) * matrizNorm3[2][0][j] + matriz33[1][0][j])
            }
        }
    }

    for (i = 0; i < number; i++) {
        value = matrizNorm3[0][0][1]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm3[i][0][j] = parseFloat((-value) * matrizNorm3[1][0][j] + matrizNorm3[i][0][j])
            }
        }
    }

    x1 = matrizNorm3[0][0][3]
    x2 = matrizNorm3[1][0][3]
    x3 = matrizNorm3[2][0][3]

    decimalRound = document.getElementById("number-decimal").value
    finalRound = 10 ** decimalRound

    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    final_solution.innerHTML += `<p></p>`
    final_solution.innerHTML += `<h4> SOLUCIÓN</h4>`
    final_solution.innerHTML += `<h4> x1 = ${Math.round(x1 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x2 = ${Math.round(x2 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x3 = ${Math.round(x3 * finalRound) / finalRound}</h4>`

}

function Gaus4x4(matriz44) {
    matrizNorm4 = matriz44

    for (i = 0; i < number; i++) {
        value1 = matriz44[0][0][0]
        value2 = matriz44[1][0][0]
        value3 = matriz44[2][0][0]
        value4 = matriz44[3][0][0]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm4[i][0][j] = matrizNorm4[i][0][j] / value1
            }
            if (i == 1) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] - (matriz44[i - 1][0][j] * value2))
            }
            if (i == 2) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] - (matriz44[i - 2][0][j]) * value3)
            }
            if (i == 3) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] - (matriz44[i - 3][0][j]) * value4)
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matriz44[1][0][1]
        value2 = matriz44[2][0][1]
        value3 = matriz44[3][0][1]
        for (j = 0; j <= number; j++) {
            if (i == 1) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] / value1)
            }
            if (i == 2) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] - (matriz44[i - 1][0][j]) * value2)
            }
            if (i == 3) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] - (matriz44[i - 2][0][j]) * value3)
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm4[2][0][2]
        value2 = matrizNorm4[3][0][2]
        for (j = 0; j <= number; j++) {
            if (i == 2) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] / value1)
            }
            if (i == 3) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] - (matrizNorm4[i - 1][0][j] * value2))
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm4[3][0][3]
        for (j = 0; j <= number; j++) {
            if (i == 3) {
                matrizNorm4[i][0][j] = parseFloat(matrizNorm4[i][0][j] / value1)
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm4[0][0][3];
        value2 = matrizNorm4[1][0][2];
        value3 = matrizNorm4[2][0][3];
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm4[i][0][j] = parseFloat((-value1) * matrizNorm4[1][0][j] + matrizNorm4[0][0][j])
            }
            if (i == 1) {
                matrizNorm4[i][0][j] = parseFloat((-value2) * matrizNorm4[2][0][j] + matrizNorm4[1][0][j])
            }
            if (i == 2) {
                matrizNorm4[i][0][j] = parseFloat((-value3) * matrizNorm4[3][0][j] + matrizNorm4[2][0][j])
            }
        }
    }

    for (i = 0; i < number; i++) {
        value2 = matrizNorm4[1][0][3]
        for (j = 0; j <= number; j++) {
            if (i == 1) {
                matrizNorm4[i][0][j] = parseFloat((-value2) * matrizNorm4[3][0][j] + matrizNorm4[i][0][j])
            }
        }
    }

    for (i = 0; i < number; i++) {
        value = matrizNorm4[0][0][3]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm4[i][0][j] = parseFloat((-value) * matrizNorm4[3][0][j] + matrizNorm4[i][0][j])
            }
        }
    }

    for (i = 0; i < number; i++) {
        value = matrizNorm4[0][0][2]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm4[i][0][j] = parseFloat((-value) * matrizNorm4[2][0][j] + matrizNorm4[i][0][j])
            }
        }
    }

    for (i = 0; i < number; i++) {
        value = matrizNorm4[0][0][1]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm4[i][0][j] = parseFloat((-value) * matrizNorm4[1][0][j] + matrizNorm4[i][0][j])
            }
        }
    }

    x1 = matrizNorm4[0][0][4]
    x2 = matrizNorm4[1][0][4]
    x3 = matrizNorm4[2][0][4]
    x4 = matrizNorm4[3][0][4]

    decimalRound = document.getElementById("number-decimal").value
    finalRound = 10 ** decimalRound

    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    final_solution.innerHTML += `<p></p>`
    final_solution.innerHTML += `<h4> SOLUCIÓN</h4>`
    final_solution.innerHTML += `<h4> x1 = ${Math.round(x1 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x2 = ${Math.round(x2 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x3 = ${Math.round(x3 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x4 = ${Math.round(x4 * finalRound) / finalRound}</h4>`

}

function Gaus5x5(matriz55) {
    matrizNorm5 = matriz55

    for (i = 0; i < number; i++) {
        value1 = matriz55[0][0][0]
        value2 = matriz55[1][0][0]
        value3 = matriz55[2][0][0]
        value4 = matriz55[3][0][0]
        value5 = matriz55[4][0][0]
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm5[i][0][j] = matrizNorm5[i][0][j] / value1
            }
            if (i == 1) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 1][0][j] * value2))
            }
            if (i == 2) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 2][0][j]) * value3)
            }
            if (i == 3) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 3][0][j]) * value4)
            }
            if (i == 4) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 4][0][j]) * value5)
            }
        }
    }


    for (i = 0; i < number; i++) {
        value1 = matriz55[1][0][1]
        value2 = matriz55[2][0][1]
        value3 = matriz55[3][0][1]
        value4 = matriz55[4][0][1]
        for (j = 0; j <= number; j++) {
            if (i == 1) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] / value1)
            }
            if (i == 2) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 1][0][j]) * value2)

            }
            if (i == 3) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 2][0][j]) * value3)

            }
            if (i == 4) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 3][0][j]) * value4)

            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm5[2][0][2]
        value2 = matrizNorm5[3][0][2]
        value3 = matrizNorm5[4][0][2]
        for (j = 0; j <= number; j++) {
            if (i == 2) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] / value1)
            }
            if (i == 3) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 1][0][j] * value2))
            }
            if (i == 4) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 2][0][j] * value3))
            }
        }
    }
    for (i = 0; i < number; i++) {
        value1 = matrizNorm5[3][0][3]
        value2 = matrizNorm5[4][0][3]
        for (j = 0; j <= number; j++) {
            if (i == 3) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] / value1)
            }
            if (i == 4) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] - (matriz55[i - 1][0][j] * value2))
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm5[4][0][4]
        for (j = 0; j <= number; j++) {
            if (i == 4) {
                matrizNorm5[i][0][j] = parseFloat(matrizNorm5[i][0][j] / value1)
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm5[0][0][4];
        value2 = matrizNorm5[1][0][4];
        value3 = matrizNorm5[2][0][4];
        value4 = matrizNorm5[3][0][4];

        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm5[i][0][j] = parseFloat((-value1) * matrizNorm5[4][0][j] + matrizNorm5[0][0][j])
            }
            if (i == 1) {
                matrizNorm5[i][0][j] = parseFloat((-value2) * matrizNorm5[4][0][j] + matrizNorm5[1][0][j])
            }
            if (i == 2) {
                matrizNorm5[i][0][j] = parseFloat((-value3) * matrizNorm5[4][0][j] + matrizNorm5[2][0][j])
            }
            if (i == 3) {
                matrizNorm5[i][0][j] = parseFloat((-value4) * matrizNorm5[4][0][j] + matrizNorm5[3][0][j])
            }

        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm5[0][0][3];
        value2 = matrizNorm5[1][0][3];
        value3 = matrizNorm5[2][0][3];
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm5[i][0][j] = parseFloat((-value1) * matrizNorm5[3][0][j] + matrizNorm5[0][0][j])
            }
            if (i == 1) {
                matrizNorm5[i][0][j] = parseFloat((-value2) * matrizNorm5[3][0][j] + matrizNorm5[1][0][j])
            }
            if (i == 2) {
                matrizNorm5[i][0][j] = parseFloat((-value3) * matrizNorm5[3][0][j] + matrizNorm5[2][0][j])
            }
        }
    }


    for (i = 0; i < number; i++) {
        value1 = matrizNorm5[0][0][2];
        value2 = matrizNorm5[1][0][2];

        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm5[i][0][j] = parseFloat((-value1) * matrizNorm5[2][0][j] + matrizNorm5[0][0][j])
            }
            if (i == 1) {
                matrizNorm5[i][0][j] = parseFloat((-value2) * matrizNorm5[2][0][j] + matrizNorm5[1][0][j])
            }
        }
    }

    for (i = 0; i < number; i++) {
        value1 = matrizNorm5[0][0][1];
        for (j = 0; j <= number; j++) {
            if (i == 0) {
                matrizNorm5[i][0][j] = parseFloat((-value1) * matrizNorm5[1][0][j] + matrizNorm5[0][0][j])
            }
        }
    }

    x1 = matrizNorm5[0][0][5]
    x2 = matrizNorm5[1][0][5]
    x3 = matrizNorm5[2][0][5]
    x4 = matrizNorm5[3][0][5]
    x5 = matrizNorm5[4][0][5]

    decimalRound = document.getElementById("number-decimal").value
    finalRound = 10 ** decimalRound

    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    final_solution.innerHTML += `<p></p>`
    final_solution.innerHTML += `<h4> SOLUCIÓN</h4>`
    final_solution.innerHTML += `<h4> x1 = ${Math.round(x1 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x2 = ${Math.round(x2 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x3 = ${Math.round(x3 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x4 = ${Math.round(x4 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x5 = ${Math.round(x5 * finalRound) / finalRound}</h4>`

}

function Seidel2x2(){
    numError = document.getElementById('number-Error').value
    const matrizSeidel2 = [[x1], [x2]]
    matrizerror = [0, 0]
    matrizerror2 = [0, 0]
    resultadox1 = 0
    resultadox2 = 0
    errorestimado = 0.5 * (10 ** (2 - numError))
    errorabsoluto = 0
    errorabsoluto1 = 0
    complete1 = false
    complete2 = false
    contador = 0;

    for (i = 0; i < number; i++) {
        value1 = matrizSeidel2[0][0][0]
        value2 = matrizSeidel2[1][0][1]

        while (complete1 == false | complete2 == false) {
            contador += 1
            if(contador > 24){
                alert('No se puede solucionar por Seidel, por favor use Gauss Jordan :) ')
                complete1 = true
                complete2 = true
            }
            matrizerror[0] = resultadox1
            resultadox1 = (matrizSeidel2[0][0][2] - matrizSeidel2[0][0][1] * resultadox2) / value1
            matrizerror[1] = resultadox1
            errorabsoluto1 = Math.abs((matrizerror[1] - matrizerror[0]) / matrizerror[1]) * 100
            if (errorabsoluto1 < errorestimado) {
                complete1 = true
            }
            matrizerror2[0] = resultadox2
            resultadox2 = (matrizSeidel2[1][0][2] - matrizSeidel2[1][0][0] * resultadox1) / value2
            matrizerror2[1] = resultadox2
            errorabsoluto2 = Math.abs((matrizerror2[1] - matrizerror2[0]) / matrizerror2[1]) * 100
            if (errorabsoluto2 < errorestimado) {
                complete2 = true
            }
        }
    }
    decimalRound = document.getElementById("number-decimal").value
    finalRound = 10 ** decimalRound

    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    final_solution.innerHTML += `<p></p>`
    final_solution.innerHTML += `<h4> SOLUCIÓN</h4>`
    final_solution.innerHTML += `<h4> x1 = ${Math.round(resultadox1 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x2 = ${Math.round(resultadox2 * finalRound) / finalRound}</h4>`
}

function Seidel3x3() {
    numError = document.getElementById('number-Error').value
    const matrizSeidel3 = [[x1], [x2], [x3]]
    matrizerror = [0, 0]
    matrizerror2 = [0, 0]
    matrizerror3 = [0, 0]
    resultadox1 = 0
    resultadox2 = 0
    resultadox3 = 0
    errorestimado = 0.5 * (10 ** (2 - numError))
    errorabsoluto = 0
    errorabsoluto1 = 0
    errorabsoluto3 = 0
    complete1 = false
    complete2 = false
    complete3 = false
    contador = 0;

    for (i = 0; i < number; i++) {
        value1 = matrizSeidel3[0][0][0]
        value2 = matrizSeidel3[1][0][1]
        value3 = matrizSeidel3[2][0][2]

        while(complete1 == false | complete2 == false | complete3 == false){
                contador += 1
                if (contador > 30) {
                    alert('No se puede solucionar por Seidel, por favor use Gauss Jordan :) ')
                    complete1 = true
                    complete2 = true
                    complete3 = true
                }
                matrizerror[0] = resultadox1
                resultadox1 = (matrizSeidel3[0][0][3] - matrizSeidel3[0][0][1] * resultadox2 - matrizSeidel3[0][0][2] * resultadox3) / value1
                matrizerror[1] = resultadox1
                errorabsoluto1 = Math.abs((matrizerror[1] - matrizerror[0]) / matrizerror[1]) * 100
                if(errorabsoluto1 < errorestimado) {
                    complete1 = true
                }
                matrizerror2[0] = resultadox2
                resultadox2 = (matrizSeidel3[1][0][3] - matrizSeidel3[1][0][0] * resultadox1 - matrizSeidel3[1][0][2] * resultadox3) / value2
                matrizerror2[1] = resultadox2 
                errorabsoluto2 = Math.abs((matrizerror2[1] - matrizerror2[0]) / matrizerror2[1]) * 100
                if (errorabsoluto2 < errorestimado) {
                    complete2 = true
                }
                matrizerror3[0] = resultadox3
                resultadox3 = (matrizSeidel3[2][0][3] - matrizSeidel3[2][0][0] * resultadox1 - matrizSeidel3[2][0][1] * resultadox2) / value3
                matrizerror3[1] = resultadox3
                errorabsoluto3 = Math.abs((matrizerror3[1] - matrizerror3[0]) / matrizerror3[1]) * 100
                if (errorabsoluto3 < errorestimado) {
                    complete3 = true
                } 
        }
       
    } 

    decimalRound = document.getElementById("number-decimal").value
    finalRound = 10 ** decimalRound

    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    final_solution.innerHTML += `<p></p>`
    final_solution.innerHTML += `<h4> SOLUCIÓN</h4>`
    final_solution.innerHTML += `<h4> x1 = ${Math.round(resultadox1 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x2 = ${Math.round(resultadox2 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x3 = ${Math.round(resultadox3 * finalRound) / finalRound}</h4>`

}

function Seidel4x4(){
    numError = document.getElementById('number-Error').value
    const matrizSeidel4 = [[x1], [x2], [x3], [x4]]
    matrizerror = [0, 0]
    matrizerror2 = [0, 0]
    matrizerror3 = [0, 0]
    matrizerror4 = [0,0]
    resultadox1 = 0
    resultadox2 = 0
    resultadox3 = 0
    resultadox4 = 0
    errorestimado = 0.5 * (10 ** (2 - numError))
    errorabsoluto = 0
    errorabsoluto1 = 0
    errorabsoluto3 = 0
    errorabsoluto4 = 0
    complete1 = false
    complete2 = false
    complete3 = false
    complete4 = false
    contador = 0;

    for (i = 0; i < number; i++) {
        value1 = matrizSeidel4[0][0][0]
        value2 = matrizSeidel4[1][0][1]
        value3 = matrizSeidel4[2][0][2]
        value4 = matrizSeidel4[3][0][3]

        while (complete1 == false | complete2 == false | complete3 == false | complete4 == false) {
            contador += 1
            if (contador > 30) {
                alert('No se puede solucionar por Seidel, por favor use Gauss Jordan :) ')
                complete1 = true
                complete2 = true
                complete3 = true
                complete4 = true
            }
            matrizerror[0] = resultadox1
            resultadox1 = (matrizSeidel4[0][0][4] - matrizSeidel4[0][0][1] * resultadox2 - matrizSeidel4[0][0][2] * resultadox3 - matrizSeidel4[0][0][3] * resultadox4) / value1
            matrizerror[1] = resultadox1
            errorabsoluto1 = Math.abs((matrizerror[1] - matrizerror[0]) / matrizerror[1]) * 100
            if (errorabsoluto1 < errorestimado) {
                complete1 = true
            }
            matrizerror2[0] = resultadox2
            resultadox2 = (matrizSeidel4[1][0][4] - matrizSeidel4[1][0][0] * resultadox1 - matrizSeidel4[1][0][2] * resultadox3 - matrizSeidel4[1][0][3] * resultadox4) / value2
            matrizerror2[1] = resultadox2
            errorabsoluto2 = Math.abs((matrizerror2[1] - matrizerror2[0]) / matrizerror2[1]) * 100
            if (errorabsoluto2 < errorestimado) {
                complete2 = true
            }
            matrizerror3[0] = resultadox3
            resultadox3 = (matrizSeidel4[2][0][4] - matrizSeidel4[2][0][0] * resultadox1 - matrizSeidel4[2][0][1] * resultadox2 - matrizSeidel4[2][0][3] * resultadox4) / value3
            matrizerror3[1] = resultadox3
            errorabsoluto3 = Math.abs((matrizerror3[1] - matrizerror3[0]) / matrizerror3[1]) * 100
            if (errorabsoluto3 < errorestimado) {
                complete3 = true
            }
            matrizerror4[0] = resultadox4
            resultadox4 = (matrizSeidel4[3][0][4] - matrizSeidel4[3][0][0] * resultadox1 - matrizSeidel4[3][0][1] * resultadox2 - matrizSeidel4[3][0][2] * resultadox3) / value4
            matrizerror4[1] = resultadox4
            errorabsoluto4 = Math.abs((matrizerror4[1] - matrizerror4[0]) / matrizerror4[1]) * 100
            if (errorabsoluto4 < errorestimado) {
                complete4 = true
            }
        }

    }

    decimalRound = document.getElementById("number-decimal").value
    finalRound = 10 ** decimalRound

    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    final_solution.innerHTML += `<p></p>`
    final_solution.innerHTML += `<h4> SOLUCIÓN</h4>`
    final_solution.innerHTML += `<h4> x1 = ${Math.round(resultadox1 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x2 = ${Math.round(resultadox2 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x3 = ${Math.round(resultadox3 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x4 = ${Math.round(resultadox4 * finalRound) / finalRound}</h4>`
}

function Seidel5x5() {
    numError = document.getElementById('number-Error').value
    const matrizSeidel5 = [[x1], [x2], [x3], [x4], [x5]]
    matrizerror = [0, 0]
    matrizerror2 = [0, 0]
    matrizerror3 = [0, 0]
    matrizerror4 = [0, 0]
    matrizerror5 = [0, 0]
    resultadox1 = 0
    resultadox2 = 0
    resultadox3 = 0
    resultadox4 = 0
    resultadox5 = 0
    errorestimado = 0.5 * (10 ** (2 - numError))
    errorabsoluto = 0
    errorabsoluto1 = 0
    errorabsoluto3 = 0
    errorabsoluto4 = 0
    errorabsoluto5 = 0
    complete1 = false
    complete2 = false
    complete3 = false
    complete4 = false
    complete5 = false
    contador = 0;

    for (i = 0; i < number; i++) {
        value1 = matrizSeidel5[0][0][0]
        value2 = matrizSeidel5[1][0][1]
        value3 = matrizSeidel5[2][0][2]
        value4 = matrizSeidel5[3][0][3]
        value5 = matrizSeidel5[4][0][4]

        while (complete1 == false | complete2 == false | complete3 == false | complete4 == false | complete5 == false) {
            contador += 1
            if (contador > 30) {
                alert('No se puede solucionar por Seidel, por favor use Gauss Jordan :) ')
                complete1 = true
                complete2 = true
                complete3 = true
                complete4 = true
                complete5 = true
            }
            matrizerror[0] = resultadox1
            resultadox1 = (matrizSeidel5[0][0][5] - matrizSeidel5[0][0][1] * resultadox2 - matrizSeidel5[0][0][2] * resultadox3 - matrizSeidel5[0][0][3] * resultadox4 - matrizSeidel5[0][0][4] * resultadox5) / value1
            matrizerror[1] = resultadox1
            errorabsoluto1 = Math.abs((matrizerror[1] - matrizerror[0]) / matrizerror[1]) * 100
            if (errorabsoluto1 < errorestimado) {
                complete1 = true
            }
            matrizerror2[0] = resultadox2
            resultadox2 = (matrizSeidel5[1][0][5] - matrizSeidel5[1][0][0] * resultadox1 - matrizSeidel5[1][0][2] * resultadox3 - matrizSeidel5[1][0][3] * resultadox4 - matrizSeidel5[1][0][4] * resultadox5) / value2
            matrizerror2[1] = resultadox2
            errorabsoluto2 = Math.abs((matrizerror2[1] - matrizerror2[0]) / matrizerror2[1]) * 100
            if (errorabsoluto2 < errorestimado) {
                complete2 = true
            }
            matrizerror3[0] = resultadox3
            resultadox3 = (matrizSeidel5[2][0][5] - matrizSeidel5[2][0][0] * resultadox1 - matrizSeidel5[2][0][1] * resultadox2 - matrizSeidel5[2][0][3] * resultadox4 - matrizSeidel5[2][0][4] * resultadox5) / value3
            matrizerror3[1] = resultadox3
            errorabsoluto3 = Math.abs((matrizerror3[1] - matrizerror3[0]) / matrizerror3[1]) * 100
            if (errorabsoluto3 < errorestimado) {
                complete3 = true
            }
            matrizerror4[0] = resultadox4
            resultadox4 = (matrizSeidel5[3][0][5] - matrizSeidel5[3][0][0] * resultadox1 - matrizSeidel5[3][0][1] * resultadox2 - matrizSeidel5[3][0][2] * resultadox3 - matrizSeidel5[3][0][4] * resultadox5) / value4
            matrizerror4[1] = resultadox4
            errorabsoluto4 = Math.abs((matrizerror4[1] - matrizerror4[0]) / matrizerror4[1]) * 100
            if (errorabsoluto4 < errorestimado) {
                complete4 = true
            }
            matrizerror5[0] = resultadox5
            resultadox5 = (matrizSeidel5[4][0][5] - matrizSeidel5[4][0][0] * resultadox1 - matrizSeidel5[4][0][1] * resultadox2 - matrizSeidel5[4][0][2] * resultadox3 - matrizSeidel5[4][0][3] * resultadox4) / value5
            matrizerror5[1] = resultadox5
            errorabsoluto5 = Math.abs((matrizerror5[1] - matrizerror5[0]) / matrizerror5[1]) * 100
            if (errorabsoluto5 < errorestimado) {
                complete5 = true
            }
        }
    }

    decimalRound = document.getElementById("number-decimal").value
    finalRound = 10 ** decimalRound

    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    final_solution.innerHTML += `<p></p>`
    final_solution.innerHTML += `<h4> SOLUCIÓN</h4>`
    final_solution.innerHTML += `<h4> x1 = ${Math.round(resultadox1 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x2 = ${Math.round(resultadox2 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x3 = ${Math.round(resultadox3 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x4 = ${Math.round(resultadox4 * finalRound) / finalRound}</h4>`
    final_solution.innerHTML += `<h4> x5 = ${Math.round(resultadox5 * finalRound) / finalRound}</h4>`
}

function TakeMatrizNumber() {
    x1 = []
    x2 = []
    x3 = []
    x4 = []
    x5 = []
    matrizcomplete = false
    for (i = 0; i < number; i++) {
        for (j = 0; j <= number; j++) {
            matriznumber = document.getElementById('square-matriz-' + i + '-' + j).value;
            if (matriznumber === "") {
                matrizcomplete = true
            }
            if (i == 0) {
                x1.push(matriznumber)
            }
            if (i == 1) {
                x2.push(matriznumber)
            }
            if (i == 2) {
                x3.push(matriznumber)
            }
            if (i == 3) {
                x4.push(matriznumber)
            }
            if (i == 4) {
                x5.push(matriznumber)
            }
        }
    }

    if (matrizcomplete) {
        alert('Complete los valores de la matriz')
    }

    method = document.getElementById('method-select').value
    if (method == 1) {
        if (number == 2) {
            const matriz2 = [[x1], [x2]]
            matriz22 = pivoteo(matriz2)
            Gaus2x2()
        }
        if (number == 3) {
            const matriz3 = [[x1], [x2], [x3]]
            matriz33 = pivoteo(matriz3)
            Gaus3x3(matriz33)
        }
        if (number == 4) {
            const matriz4 = [[x1], [x2], [x3], [x4]]
            matriz44 = pivoteo(matriz4)
            Gaus4x4(matriz44)
        }
        if (number == 5) {
            const matriz5 = [[x1], [x2], [x3], [x4], [x5]]
            matriz55 = pivoteo(matriz5)
            Gaus5x5(matriz55)
        }
    }
    if (method == 2) {
        if (number == 2) {
            const matriz2 = [[x1], [x2]]
            matriz22 = pivoteo(matriz2)
            Gaus2x2()
        }
        if (number == 3) {
            const matriz3 = [[x1], [x2], [x3]]
            matriz33 = pivoteo(matriz3)
            Gaus3x3(matriz33)
        }
        if (number == 4) {
            const matriz4 = [[x1], [x2], [x3], [x4]]
            matriz44 = pivoteo(matriz4)
            Gaus4x4(matriz44)
        }
        if (number == 5) {
            const matriz5 = [[x1], [x2], [x3], [x4], [x5]]
            matriz55 = pivoteo(matriz5)
            Gaus5x5(matriz55)
        }
    }
    if (method == 3) {
        if(number == 2){
            Seidel2x2()
        }
        if(number == 3){
            Seidel3x3()
        }
        if(number == 4){
            Seidel4x4()
        }
        if(number == 5){
            Seidel5x5()
        }
    }

}

function SelectMethod() {
    method = document.getElementById('method-select').value
    variblesection = document.getElementById('variables')
    variblesection.innerHTML = ``
    if (method == 3) {
        variblesection.innerHTML += `<p></p>`
        variblesection.innerHTML += ` <h4>Ingrese la cantidad de Cifras significativas del Error Estimado </h4>
        <input type="number" id="number-Error" class="square-error">`
    }
    variblesection.innerHTML += `<h4>Ingrese el número de variables (Valores entre 2 y 5) </h4>
        <input type="number" id="number-matriz" min="2" max="5" class="square-matriz">
        <input type="submit" value="Enviar numero variables" onclick="TakeMatrizValue()"  class="btn btn-primary">
    `
    if (method == 1 | method == 2 | method == 3) {
        console.log(method)
    }
    else {
        alert('Seleccione un metodo')
        variblesection.innerHTML = ``
        final_solution.innerHTML = ``
        matriz.innerHTML = ``
    }
}

function TakeMatrizValue() {
    final_solution = document.getElementById('final-solution')
    final_solution.innerHTML = ``
    number = document.getElementById('number-matriz').value
    matriz = document.getElementById('matriz')
    if(method == 3){
        numError = document.getElementById('number-Error').value
    }
    matriz.innerHTML = ``
    if(number == 2){
        matriz.innerHTML += `
        <h6 class="x-value pl-4 pr-5">x1</h6>
        <h6 class="x-value pl-4 pr-5">x2</h6>
        <h6 class="x-value pl-3 pr-4">b</h6>
        `
        matriz.innerHTML += `<p id="separation"></p>`
    }
    if (number == 3) {
        matriz.innerHTML += `
        <h6 class="x-value pl-4 pr-5">x1</h6>
        <h6 class="x-value pl-4 pr-5">x2</h6>
        <h6 class="x-value pl-3 pr-4">x3</h6>
        <h6 class="x-value pl-5 pr-5">b</h6>
        `
        matriz.innerHTML += `<p id="separation"></p>`
    }
    if (number == 4) {
        matriz.innerHTML += `
        <h6 class="x-value pl-4 pr-5">x1</h6>
        <h6 class="x-value pl-4 pr-5">x2</h6>
        <h6 class="x-value pl-3 pr-4">x3</h6>
        <h6 class="x-value pl-5 pr-5">x4</h6>
        <h6 class="x-value pl-2 pr-4">b</h6>
        `
        matriz.innerHTML += `<p id="separation"></p>`
    }
    if (number == 5) {
        matriz.innerHTML += `
        <h6 class="x-value pl-4 pr-5">x1</h6>
        <h6 class="x-value pl-4 pr-5">x2</h6>
        <h6 class="x-value pl-3 pr-4">x3</h6>
        <h6 class="x-value pl-5 pr-5">x4</h6>
        <h6 class="x-value pl-2 pr-4">x5</h6>
        <h6 class="x-value pl-5">b</h6>
        `
        matriz.innerHTML += `<p id="separation"></p>`
    } 
    for (i = 0; i < number; i++) {
        for (j = 0; j <= number; j++) {
            if (j == number) {
                matriz.innerHTML += `<hr class="y"/>`
                matriz.innerHTML += `<input type="number" class="square-matriz" id="square-matriz-${i}-${j}" min="0" max="100">`
            }
            else {
                matriz.innerHTML += `<input type="number" class="square-matriz" id="square-matriz-${i}-${j}" min="0" max="100">`
            }
        }
        matriz.innerHTML += `<p id="separation"></p>`
    }
    matriz.innerHTML += `<p></p>`
    matriz.innerHTML += `<p class="decimals">Ingrese el número de decimales</p>`
    matriz.innerHTML += `<input type="number" id="number-decimal" min="1" max="8" class="square-matriz d-flex">`
    matriz.innerHTML += `<p></p>`
    matriz.innerHTML += `<input type="submit" class="btn btn-primary" value="Enviar datos matriz" onclick="TakeMatrizNumber()"></input>`
}