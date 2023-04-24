const express = require('express')
const app = express()
const {Client} = require('pg')
const cors = require('cors')
const client = new Client({
    host: 'localhost',
    port: '5432',
    database: 'peregrinum_db',
    user: 'postgres',
    password: '12345678'
})
client.connect((err) => {
    if(err){
        console.log("Erro ao tentar conectar ao banco!", err.stack)
    } else {
        console.log('Conectado ao banco!')
    }
})

app.use(express.json())
app.use(cors())

app.get('/getLivros', function(req, res) {
    client.query('SELECT * FROM livro', (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.send(resQuery.rows)
        }
    })
    
})

app.post('/cadastrarLivro', function(req, res){
    const corpoLivro = req.body
    client.query(`INSERT INTO livro VALUES(default, '${corpoLivro.author}', '${corpoLivro.assunto}', true, '${corpoLivro.nome_livro}')`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.status(200).send({msg: "Livro cadastrado com sucesso!"})
        }
    })
})

app.post('/editarLivro', function(req, res){
    const corpoLivro = req.body
    if(corpoLivro.nome_livro != null){
        client.query(`UPDATE livro SET nome_livro = '${corpoLivro.nome_livro}' WHERE book_id=${corpoLivro.book_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                res.send({msg: "Livro editado com sucesso!"})
            }
        })
    }
    if(corpoLivro.author != null){
        client.query(`UPDATE livro SET author = '${corpoLivro.author}' WHERE book_id=${corpoLivro.book_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                res.send({msg: "Livro editado com sucesso!"})
            }
        })
    }
    if(corpoLivro.assunto != null){
        client.query(`UPDATE livro SET assunto = '${corpoLivro.assunto}' WHERE book_id=${corpoLivro.book_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                res.send({msg: "Livro editado com sucesso!"})
            }
        })
    }
    if(corpoLivro.status != null){
        client.query(`UPDATE livro SET status = '${corpoLivro.status}' WHERE book_id=${corpoLivro.book_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                res.send({msg: "Livro editado com sucesso!"})
            }
        })
    }
    
})

app.post('/deletarLivro', function(req, res){
    const corpoLivro = req.body
    client.query(`DELETE FROM livro WHERE book_id='${corpoLivro.book_id}'`, (err, resQuery) => {
        if(err){
            res.status(401).send('Bad credentials')
        } else {
            res.status(200).send({msg: "Livro deletado com sucesso!"})
        }
    })
})

app.get('/getUsuarios', function(req, res) {
    client.query('SELECT * FROM usuario', (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.send(resQuery.rows)
        }
    })
    
})

app.post('/cadastrarUsuario', function(req, res){
    const corpoUsuario = req.body
    client.query(`INSERT INTO usuario VALUES(default, '${corpoUsuario.nome_user}', '${corpoUsuario.serie}', '${corpoUsuario.idade}', true)`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.status(200).send({msg: "Usuário cadastrado com sucesso!"})
        }
    })
})

app.post('/editarUsuario', function(req, res){
    const corpoUsuario = req.body
    if(corpoUsuario.nome_user != null){
        client.query(`UPDATE usuario SET nome_user = '${corpoUsuario.nome_user}' WHERE user_id=${corpoUsuario.user_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                
            }
        })
    }
    if(corpoUsuario.serie != null){
        client.query(`UPDATE usuario SET serie = '${corpoUsuario.serie}' WHERE user_id=${corpoUsuario.user_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                
            }
        })
    }
    if(corpoUsuario.idade != null){
        client.query(`UPDATE usuario SET idade = '${corpoUsuario.idade}' WHERE user_id=${corpoUsuario.user_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                
            }
        })
    }
    if(corpoUsuario.status != null){
        client.query(`UPDATE usuario SET status = '${corpoUsuario.status}' WHERE user_id=${corpoUsuario.user_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                
            }
        })
    }
    if(corpoUsuario.debitos != null){
        client.query(`UPDATE usuario SET debitos = '${corpoUsuario.debitos}' WHERE user_id=${corpoUsuario.user_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                
            }
        })
    }
    res.send({msg: "Usuário editado com sucesso!"})
})

app.post('/deletarUsuario', function(req, res){
    const corpoUsuario = req.body
    client.query(`DELETE FROM usuario WHERE user_id='${corpoUsuario.user_id}'`, (err, resQuery) => {
        if(err){
            res.status(401).send('Bad credentials')
        } else {
            res.status(200).send({msg: "Usuário deletado com sucesso!"})
        }
    })
})
app.get('/getReservas', function(req, res) {
    client.query('SELECT * FROM reserva', (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.send(resQuery.rows)
        }
    })
    
})

app.post('/cadastrarReserva', function(req, res){
    const corpoReserva = req.body

    client.query(`SELECT debitos FROM usuario WHERE user_id=${corpoReserva.user_id}`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            if(resQuery.rows[0].debitos <= 0){
                client.query(`SELECT status FROM usuario WHERE user_id=${corpoReserva.user_id}`, (err, resQuery) => {
                    if(err){
                        
                    } else {
                        if(resQuery.rows[0].status == false){
                            res.status(401).json("O usuário não está disponível para realizar a reserva")
                        } else {
                            client.query(`SELECT status FROM livro WHERE book_id=${corpoReserva.book_id}`, (err, resQuery) => {
                                if(err){
                                    console.log(err)
                                } else {
                                    if(resQuery.rows[0].status == false){
                                        res.status(401).json("O livro não está disponível para realizar a reserva")
                                    } else {
                                        const dataAtual = new Date()
                const ano = dataAtual.getFullYear()
                const mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2)
                const dia = ("0" + dataAtual.getDate()).slice(-2)
            
                const dataFormatada = ano + "-" + mes + "-" + dia;
            
                const SomaData = new Date(dataFormatada)
            
                client.query(`SELECT serie FROM usuario WHERE user_id=${corpoReserva.user_id}`, (err, resQuery) => {
                    if(err){
                        console.log(err)
                    } else {
                        const serieResposta = resQuery.rows[0].serie
                        if(serieResposta.includes("EM")){
                            SomaData.setDate(SomaData.getDate() + 14)
            
                const limiteDataFormatada = SomaData.toISOString().slice(0, 10)
            
                client.query(`UPDATE usuario SET status = false WHERE user_id=${corpoReserva.user_id}`, (err, resQuery) => {
                    if(err){
                        console.log(err)
                    } else {
                        
                    }
                })
            
                client.query(`UPDATE livro SET status = false WHERE book_id=${corpoReserva.book_id}`, (err, resQuery) => {
                    if(err){
                        console.log(err)
                    } else {
                        
                    }
                })
            
                client.query(`INSERT INTO reserva VALUES(default, '${corpoReserva.user_id}', '${corpoReserva.book_id}', '${dataFormatada}', '${limiteDataFormatada}', true)`, (err, resQuery) => {
                    if(err){
                        console.log(err)
                    } else {
                        res.status(200).send(resQuery.rows[0])
                    }
                })
                        } else {
                            SomaData.setDate(SomaData.getDate() + 7)
            
                const limiteDataFormatada = SomaData.toISOString().slice(0, 10)
            
                client.query(`UPDATE usuario SET status = false WHERE user_id=${corpoReserva.user_id}`, (err, resQuery) => {
                    if(err){
                        console.log(err)
                    } else {
                        
                    }
                })
            
                client.query(`UPDATE livro SET status = false WHERE book_id=${corpoReserva.book_id}`, (err, resQuery) => {
                    if(err){
                        console.log(err)
                    } else {
                        
                    }
                })
            
                client.query(`INSERT INTO reserva VALUES(default, '${corpoReserva.user_id}', '${corpoReserva.book_id}', '${dataFormatada}', '${limiteDataFormatada}', true)`, (err, resQuery) => {
                    if(err){
                        console.log(err)
                    } else {
                        res.status(200).send(resQuery.rows[0])
                    }
                })
                        }
                        
                    }
                })
            
                
                                    }
                                    
                                }
                            })
                        }
                    }
                })
            } else {
                res.status(401).json("O usuário possui débitos, portanto não pode realizar uma nova reserva")
            }
        }
    })

})

app.post('/editarReserva', function(req, res){
    const corpoReserva = req.body
    if(corpoReserva.limitdate != null){
        client.query(`UPDATE reserva SET limitdate = '${corpoReserva.limitdate}' WHERE id_reserva=${corpoReserva.id_reserva}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                res.send({msg: "Reserva editada com sucesso!"})
            }
        })
    }
})
app.post('/concluirReserva', function(req, res){
    const corpoReserva = req.body
    client.query(`UPDATE reserva SET status = false WHERE id_reserva=${corpoReserva.id_reserva}`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            
        }
    })
    client.query(`SELECT user_id FROM reserva WHERE id_reserva=${corpoReserva.id_reserva}`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
                client.query(`UPDATE usuario SET status = true WHERE user_id=${resQuery.rows[0].user_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                
            }
        })
        }
    })
    client.query(`SELECT book_id FROM reserva WHERE id_reserva=${corpoReserva.id_reserva}`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
                client.query(`UPDATE livro SET status = true WHERE book_id=${resQuery.rows[0].book_id}`, (err, resQuery) => {
            if(err){
                console.log(err)
            } else {
                
            }
        })
        }
    })
    res.status(200).json("Livro foi devolvido com sucesso!")
})


app.post('/deletarReserva', function(req, res){
    const corpoReserva = req.body
    client.query(`DELETE FROM reserva WHERE id_reserva='${corpoReserva.id_reserva}'`, (err, resQuery) => {
        if(err){
            res.status(401).send('Bad credentials')
        } else {
            res.status(200).send({msg: "Reserva deletada com sucesso!"})
        }
    })
})

app.get('/livrosDisponiveis', function(req, res){
    client.query("SELECT * FROM livro WHERE status = true", (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.send(resQuery.rows)
        }
    })
})

app.get('/usuariosDisponiveis', function(req, res){
    client.query("SELECT * FROM usuario WHERE status = true", (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.send(resQuery.rows)
        }
    })
})

app.get('/usuariosIndisponiveis', function(req, res){
    client.query("SELECT * FROM usuario WHERE status = false", (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.send(resQuery.rows)
        }
    })
})

app.post('/reservasUsuario', function(req, res) {
    const corpoReserva = req.body
    client.query(`SELECT * FROM reserva WHERE user_id = ${corpoReserva.user_id} ORDER BY id_reserva DESC LIMIT 10`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            res.send(resQuery.rows)
        }
    })
})

app.post('/reservasAtivasUsuario', function(req, res) {
    const corpoReserva = req.body
    client.query(`SELECT * FROM reserva WHERE user_id = ${corpoReserva.user_id} AND status = true`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            client.query(`SELECT * FROM livro WHERE book_id = ${resQuery.rows[0].book_id}`, (err, resQuery1) => {
                if(err){
                    console.log(err)
                } else {
                    res.send({
                        id_reserva: resQuery.rows[0].id_reserva,
                        user_id: resQuery.rows[0].user_id,
                        book_id: resQuery.rows[0].book_id,
                        createdat: resQuery.rows[0].createdat,
                        limitdate: resQuery.rows[0].limitdate,
                        status: resQuery.rows[0].status,
                        nome_livro: resQuery1.rows[0].nome_livro
                    })
                }
            })
        }
    })
})

app.post('/livroAtivoReserva', function(req, res) {
    const corpoReserva = req.body
    
})

app.post('/debitosUsuario', function(req, res){
    const corpoReserva = req.body
    var divida = 0  
    const dataAtual = new Date()
    // const ano = dataAtual.getFullYear()
    // const mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2)
    // const dia = ("0" + dataAtual.getDate()).slice(-2)

    // const dataFormatada = ano + "-" + mes + "-" + dia;
    client.query(`SELECT limitdate FROM reserva WHERE user_id = ${corpoReserva.user_id} AND status = true`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            for(let i=0; i<=resQuery.rows.length -1; i++){
                if (dataAtual > resQuery.rows[i].limitdate){
                    let diffInMilliseconds = Math.abs(dataAtual - resQuery.rows[i].limitdate);
                    let diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
                    console.log(diffInDays)
                    divida = divida + diffInDays
                } else {
                    divida = divida + 0
                }              
            }
            client.query(`UPDATE usuario SET debitos = '${divida}' WHERE user_id=${corpoReserva.user_id}`, (err, resQuery) => {
                if(err){
                    console.log(err)
                } else {
                    res.send({msg: "Dívidas atualizadas com sucesso!"})
                }
            })
        }
    })

})

app.post('/limparDebitos', function(req, res){
    const corpoDebitos = req.body
    client.query(`SELECT debitos FROM usuario WHERE user_id=${corpoDebitos.user_id}`, (err, resQuery) => {
        if(err){
            console.log(err)
        } else {
            const novaDividaTotal = resQuery.rows[0].debitos - corpoDebitos.valor
            client.query(`UPDATE usuario SET debitos = '${novaDividaTotal}' WHERE user_id=${corpoDebitos.user_id}`, (err, resQuery) => {
                if(err){
                    console.log(err)
                } else {
                    res.send({msg: "Dívidas atualizadas com sucesso!"})
                }
            })
        }
    })
    
})

app.listen(3000)