import MainItem from '@/components/detail-components/MainItem';
import Header from '@/components/ui-components/Header';
import { offers } from '@/constants/assets';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">

      {/* New offers */}
      <FlatList
        data={offers}
        ListHeaderComponent={() => <Header />}
        contentContainerClassName='p-2'
        renderItem={({item, index}) => (
          <MainItem 
            item={item}
            iterationIndex={index}
          />
        )}
      />
    </SafeAreaView>
  );
}


