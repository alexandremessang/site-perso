import React from 'react';
import { Box, Button, Text } from 'grommet';

export const NewComp = () => {
    const [count, setCount]= React.useState(0)
    React.useEffect(() => setCount(3), []);

    return (
        <Box>
            <Text>Hey</Text>
            <Text>{count}</Text>
            <Button label="+1" onClick={() => setCount(count+1)}></Button>
        </Box>
    )
}

