import React, { useEffect, useRef } from "react";
import { TextInput } from "react-native";
import { Center } from "native-base";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { styles } from "./styles";

type IProps = {
  value: string;
  setValue: (value: string) => void;
  cellCount: number;
};

const PinInput: React.FC<IProps> = ({ value, setValue, cellCount }) => {
  const ref = useBlurOnFulfill({ value, cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const inputsRef = useRef<Array<TextInput | null>>([]);

  const addRef = (ref: TextInput, index: number) => {
    inputsRef.current[index] = ref;
  };

  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  return (
    <Center justifyContent="center">
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <TextInput
            ref={(ref) => addRef(ref!, index)}
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
            editable={index === 0 ? true : !symbol}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </TextInput>
        )}
      />
    </Center>
  );
};

export default PinInput;
