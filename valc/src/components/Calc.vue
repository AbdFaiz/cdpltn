<template>
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white shadow-2xl rounded-2xl p-6 w-80">
        <div class="mb-6 text-right">
          <div class="text-sm text-gray-500 h-6">
            {{ previousDisplay }}
          </div>
          <input 
            type="text" 
            :value="display" 
            readonly 
            class="w-full text-right text-4xl font-bold bg-transparent focus:outline-none"
          />
        </div>
        <div class="grid grid-cols-4 gap-3">
          <button 
            v-for="button in buttons" 
            :key="button.label"
            @click="button.onClick"
            :class="[
              button.className, 
              'py-4 rounded-xl text-2xl font-bold transition duration-200 hover:opacity-80 active:scale-95 focus:outline-none',
              button.label === '0' ? 'col-span-2' : 'col-span-1'
            ]"
          >
            {{ button.label }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const display = ref('0')
  const previous = ref(null)
  const operator = ref(null)
  const waitingForOperand = ref(false)
  
  const previousDisplay = computed(() => {
    if (previous.value !== null && operator.value) {
      return `${previous.value} ${operator.value}`
    }
    return ''
  })
  
  const handleNumberClick = (number) => {
    if (waitingForOperand.value) {
      display.value = number.toString()
      waitingForOperand.value = false
    } else {
      display.value = display.value === '0' 
        ? number.toString() 
        : display.value + number
    }
  }
  
  const handleOperatorClick = (op) => {
    const inputValue = parseFloat(display.value)
  
    if (previous.value === null) {
      previous.value = inputValue
    } else if (!waitingForOperand.value) {
      calculateResult()
    }
  
    waitingForOperand.value = true
    operator.value = op
  }
  
  const calculateResult = (nextOp = null) => {
    const current = parseFloat(display.value)
  
    if (previous.value === null) return
  
    let result
    switch (operator.value) {
      case '+':
        result = previous.value + current
        break
      case '-':
        result = previous.value - current
        break
      case '*':
        result = previous.value * current
        break
      case '/':
        result = previous.value / current
        break
      default:
        result = current
    }
  
    display.value = result.toString()
    previous.value = result
    operator.value = nextOp
    waitingForOperand.value = true
  }
  
  const handleEquals = () => {
    calculateResult()
    previous.value = null
    operator.value = null
    waitingForOperand.value = false
  }
  
  const handleClear = () => {
    display.value = '0'
    previous.value = null
    operator.value = null
    waitingForOperand.value = false
  }
  
  const handleDecimal = () => {
    if (waitingForOperand.value) {
      display.value = '0.'
      waitingForOperand.value = false
      return
    }
  
    if (!display.value.includes('.')) {
      display.value += '.'
    }
  }
  
  const handleNegate = () => {
    display.value = (parseFloat(display.value) * -1).toString()
  }
  
  const handlePercentage = () => {
    display.value = (parseFloat(display.value) / 100).toString()
  }
  
  const buttons = [
    { label: 'C', onClick: handleClear, className: 'bg-red-500 text-white' },
    { label: '±', onClick: handleNegate, className: 'bg-gray-300' },
    { label: '%', onClick: handlePercentage, className: 'bg-gray-300' },
    { label: '÷', onClick: () => handleOperatorClick('/'), className: 'bg-orange-500 text-white' },
    { label: '7', onClick: () => handleNumberClick(7), className: 'bg-gray-200' },
    { label: '8', onClick: () => handleNumberClick(8), className: 'bg-gray-200' },
    { label: '9', onClick: () => handleNumberClick(9), className: 'bg-gray-200' },
    { label: '×', onClick: () => handleOperatorClick('*'), className: 'bg-orange-500 text-white' },
    { label: '4', onClick: () => handleNumberClick(4), className: 'bg-gray-200' },
    { label: '5', onClick: () => handleNumberClick(5), className: 'bg-gray-200' },
    { label: '6', onClick: () => handleNumberClick(6), className: 'bg-gray-200' },
    { label: '-', onClick: () => handleOperatorClick('-'), className: 'bg-orange-500 text-white' },
    { label: '1', onClick: () => handleNumberClick(1), className: 'bg-gray-200' },
    { label: '2', onClick: () => handleNumberClick(2), className: 'bg-gray-200' },
    { label: '3', onClick: () => handleNumberClick(3), className: 'bg-gray-200' },
    { label: '+', onClick: () => handleOperatorClick('+'), className: 'bg-orange-500 text-white' },
    { label: '0', onClick: () => handleNumberClick(0), className: 'bg-gray-200 col-span-2' },
    { label: '.', onClick: handleDecimal, className: 'bg-gray-200' },
    { label: '=', onClick: handleEquals, className: 'bg-orange-500 text-white' }
  ]
  </script>