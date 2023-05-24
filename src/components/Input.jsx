const Input = ({title, value, setValue}) => {
	return (
		<fieldset>
			<label htmlFor="{title}">{title}</label>
			<input id={title} type="text" value={value} onChange={setValue} />
		</fieldset>
	)
}
export default Input;