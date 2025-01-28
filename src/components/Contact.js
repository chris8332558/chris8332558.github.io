function Contact() {
    const { createElement, setState, getState } = Bricker;
    
    function handleSubmit(e) {
      e.preventDefault();
      const formData = getState().formData;
      console.log('Submitting:', formData);
      // Here you would typically send the data to a server
    }
  
    function handleInputChange(e) {
      setState({
        formData: { ...getState().formData, [e.target.name]: e.target.value }
      });
    }
  
    return createElement('section', { id: 'contact' }, [
      createElement('h2', {}, ['Contact Me']),
      createElement('form', { onSubmit: handleSubmit }, [
        createElement('input', { 
          type: 'text', 
          name: 'name', 
          placeholder: 'Name', 
          onInput: handleInputChange 
        }),
        createElement('input', { 
          type: 'email', 
          name: 'email', 
          placeholder: 'Email', 
          onInput: handleInputChange 
        }),
        createElement('textarea', { 
          name: 'message', 
          placeholder: 'Message', 
          onInput: handleInputChange 
        }),
        createElement('button', { type: 'submit' }, ['Send'])
      ])
    ]);
  }
  