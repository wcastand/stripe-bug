import { useColorScheme, Platform, StyleSheet, View } from 'react-native'
import { CardForm, StripeProvider } from '@stripe/stripe-react-native'

export default function App() {
	const color = useColorScheme()
	console.log(Platform.OS, color)
	return (
		<StripeProvider publishableKey="pk_test_oKhSR5nslBRnBZpjO6KuzZeX">
			<View style={styles.container}>
				<CardForm
					style={{ width: '90%', height: 500, margin: 30 }}
					onCardChange={(cardDetails) => console.log('cardDetails', cardDetails)}
				/>
			</View>
		</StripeProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
