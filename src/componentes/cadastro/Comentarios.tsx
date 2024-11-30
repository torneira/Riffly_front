import React, { useState, useEffect, FormEvent } from 'react';

// Definindo a interface para um comentário
interface Comentario {
    id: number;
    nome_usuario: string;
    comentario: string;
}

const Comentarios: React.FC = () => {
    const [comentarios, setComentarios] = useState<Comentario[]>([]); // Lista de comentários
    const [nomeUsuario, setNomeUsuario] = useState<string>(''); // Nome do usuário
    const [comentario, setComentario] = useState<string>(''); // Texto do comentário

    // Buscar os comentários do servidor
    const fetchComentarios = async () => {
        try {
            const response = await fetch('http://localhost:5000/comentarios');
            const data = await response.json();
            setComentarios(data); 
        } catch (error) {
            console.error('Erro ao buscar comentários:', error);
        }
    };

    // Enviar novo comentário para o servidor
    const enviarComentario = async (e: FormEvent) => {
        e.preventDefault(); 
        try {
            const response = await fetch('http://localhost:5000/comentarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome_usuario: nomeUsuario, comentario }),
            });
            if (response.ok) {
                setNomeUsuario(''); 
                setComentario(''); 
                fetchComentarios(); 
            } else {
                console.error('Erro ao enviar comentário');
            }
        } catch (error) {
            console.error('Erro ao enviar comentário:', error);
        }
    };

   
    useEffect(() => {
        fetchComentarios();
    }, []);

    return (
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <h2>Comentários</h2>
            <form onSubmit={enviarComentario} style={{ marginBottom: '20px' }}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nomeUsuario}
                        onChange={(e) => setNomeUsuario(e.target.value)}
                        required
                        style={{ width: '100%', marginBottom: '10px' }}
                    />
                </div>
                <div>
                    <label>Comentário:</label>
                    <textarea
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        required
                        style={{ width: '100%', marginBottom: '10px' }}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

            <div>
                {comentarios.map((c) => (
                    <div
                        key={c.id}
                        style={{
                            borderBottom: '1px solid #ddd',
                            marginBottom: '10px',
                            paddingBottom: '10px',
                        }}
                    >
                        <strong>{c.nome_usuario}</strong>
                        <p>{c.comentario}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comentarios;