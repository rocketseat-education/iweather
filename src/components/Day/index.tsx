import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';

export type DayProps = {
  icon: React.FC<SvgProps>;
  day: string;
  weather: string;
  max: string;
  min: string;
}

type Props = {
  data: DayProps;
};

export function Day({ data }: Props) {
  const { icon: Icon } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.day}>
        {data.day}
      </Text>

      <Icon width={56} height={56} />

      <Text style={styles.max}>
        {data.max}
      </Text>

      <Text style={styles.min}>
        {data.min}
      </Text>
    </View>
  );
}