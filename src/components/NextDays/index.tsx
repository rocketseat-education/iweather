import { View } from 'react-native';

import { Day, DayProps } from '@components/Day';

import { styles } from './styles';

interface Props {
  data: DayProps[];
}

export function NextDays({ data }: Props) {
  return (
    <View style={styles.container}>
      {
        data.map((day) => (
          <Day key={day.day} data={day} />
        ))
      }
    </View>
  );
}