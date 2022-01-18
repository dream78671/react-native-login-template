import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: "black" },
        mode === 'contained' && { backgroundColor: "white" },
        mode === 'important' && { backgroundColor: "#C41E3A" },


        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color:'white',
    lineHeight: 26,
  },
})
