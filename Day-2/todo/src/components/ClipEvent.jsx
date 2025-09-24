import React from 'react'

export default function ClipEvent() {
    const handleCopy = (e) => {
        alert('Text copy disabled')
        e.preventDefault()
    }
    const handleCut = () => {
        console.log('Text Cut')
    }
    const handlePaste = (e) => {
        alert('Text Paste not allowed')
        e.preventDefault()
    }
  return (
    <div>
        <p onCopy={handleCopy}>Hello</p>
        <textarea placeholder='Not paste allowed' onPaste={handlePaste}></textarea>
    </div>
  )
}
