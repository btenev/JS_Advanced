function editElement(ref, match, replace) {
    let text = ref.textContent;
    
    const matcher = new RegExp(match, 'g');

    text = text.replace(matcher, replace);

    ref.textContent = text;
}