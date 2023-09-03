import React from 'react';
import { Text, Pressable, IPressableProps } from 'native-base';

type Props = IPressableProps & {
    name: string
    isActived: boolean
}

export function Group({name,isActived, ...rest}: Props) {
  return (
    <Pressable
        mr={3}
        w={24}
        h={10}
        bg="gray.600"
        rounded="md"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        isPressed={isActived}
        _pressed={{
            borderColor: "green.500",
            borderWidth: 1
        }}
    {...rest}>
        <Text
        color={isActived ? "green.200" : "green.500"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
    >
        {name}
    </Text>
    </Pressable>
  );
}