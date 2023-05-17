import React from "react";
import { TextInput, Text } from "react-native";
import { Center, Flex } from "native-base";

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
  hasError?: boolean;
};

const PinInput: React.FC<IProps> = ({
  value,
  setValue,
  cellCount,
  hasError,
}) => {
  const ref = useBlurOnFulfill({ value, cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              hasError && styles.hasError,
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </TextInput>
        )}
      />
      <Flex mt={4}>
        {hasError ? (
          <Text style={styles.textError}>Código inválido</Text>
        ) : null}
      </Flex>
    </Center>
  );
};

export default PinInput;
