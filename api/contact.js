import axios from "axios";
import * as Yup from "yup";

const schema = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string().email(),
	message: Yup.string().required(),
});

export default async (req, res) => {
	try {
		const data = await schema.validate(req.body);

		await axios({
			method: "POST",
			url: `${process.env.PORTFOLIO_FORMIUM_ENDPOINT}`,
			headers: {
				"Content-Type": "application/json",
			},
			data,
		});

		res.status(200).json({ message: "Submission has been sent successfully" });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: "Submission has failed" });
	}
};
