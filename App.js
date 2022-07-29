import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CardForm, StripeProvider } from '@stripe/stripe-react-native'
import { CardField, useStripe } from '@stripe/stripe-react-native'

export default function App() {
	return (
		<StripeProvider publishableKey="pk_test_oKhSR5nslBRnBZpjO6KuzZeX">
			<View style={styles.container}>
				<CardForm
					postalCodeEnabled={true}
					placeholders={{
						number: '4242 4242 4242 4242',
					}}
					cardStyle={{
						backgroundColor: '#FFFFFF',
						textColor: '#000000',
					}}
					style={{
						width: '90%',
						height: 500,
						margin: 30,
					}}
					onCardChange={(cardDetails) => {
						console.log('cardDetails', cardDetails)
					}}
					onFocus={(focusedField) => {
						console.log('focusField', focusedField)
					}}
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
