'use client';

import { useState } from 'react';

export function FormComponent() {
    const [formData, setFormData] = useState({ 
        nome: '', 
        email: '', 
        contador: 0 
    });

    const handleIncrement = (e) => {
        e.preventDefault(); 
        setFormData({ 
            ...formData, 
            contador: formData.contador + 1 
        });
    };

    const handleDecrement = (e) => {
        e.preventDefault();
     
        if (formData.contador > 0) {
            setFormData({ 
                ...formData, 
                contador: formData.contador - 1 
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados finais:", formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <label htmlFor="user">Nome do Usuário:</label>
            <input
                id="user"
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            />

            <div style={{ textAlign: 'center' }}>
                <p>Total: <strong>{formData.contador}</strong></p>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button onClick={handleDecrement} type="button" style={{ padding: '5px 15px' }}>
                        - 1
                    </button>
                    
                    <button onClick={handleIncrement} type="button" style={{ padding: '5px 15px' }}>
                        + 1
                    </button>
                </div>
            </div>

            <button type="submit" style={{ marginTop: '20px', backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '10px', borderRadius: '5px' }}>
                Enviar Dados
            </button>
        </form>
    );
}

export default FormComponent;