const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('RentaAutos', ['Reserva']);
const { ObjectId } = require('mongojs');

// // Obtener todas las reservas
// router.get('/Reserva', (req, res, next) => {
//     db.Reserva.find((err, Reserva) => {
//         if (err) return next(err);
//         res.json(Reserva);
//     });
// });

// Obtener reserva por id
router.get('/Reserva/:id', (req, res, next) => {
    db.Reserva.findOne({ _id: ObjectId(req.params.id) }, (err, Reserva) => {
        if (err) return next(err);

        if (!Reserva) {
            return res.status(404).json({ error: 'Reserva not found' });
        }

        res.json(Reserva);
    });
});

// Crear un nuevo Reserva
router.post('/Reserva', (req, res, next) => {
    const reservaData = req.body;

    if (!reservaData.lugarS || !reservaData.FechaS || !reservaData.HoraS || !reservaData.LugarE || !reservaData.FechaE || !reservaData.HoraE || !reservaData.Edad || !reservaData.Vehiculo || !reservaData.nombre || !reservaData.apellidos || !reservaData.Pais || !reservaData.telefono || !reservaData.correo) {
        return res.status(400).json({
            error: 'Bad data - lugarS, FechaS, HoraS, lugarE, FechaE, HoraE, Edad, Vehiculo, nombre, apellidos, pais, telefono and correo are required fields'
        });
    } else {
        db.Reserva.save(reservaData, (err, savedReserva) => {
            if (err) return next(err);
            res.json(savedReserva);
        });
    }
});

// Eliminar un reserva por ID
router.delete('/Reserva/:id', (req, res, next) => {
    const ReservaId = req.params.id;

    if (!ObjectId.isValid(ReservaId)) {
        return res.status(400).json({ error: 'Invalid Reserva ID' });
    }

    db.Reserva.remove({ _id: ObjectId(ReservaId) }, (err, result) => {
        if (err) return next(err);

        if (result.n === 0) {
            return res.status(404).json({ error: 'Reserva not found' });
        }

        res.json({ message: 'Reserva deleted successfully' });
    });
});

// Actualizar un usuario por ID
router.put('/Reserva/:id', (req, res, next) => {
    const ReservaId = req.params.id;
    const { lugarS, FechaS, HoraS, LugarE, FechaE, HoraE, Edad,Vehiculo, nombre, apellidos, Pais, telefono,correo} = req.body;

    if (!ObjectId.isValid(ReservaId)) {
        return res.status(400).json({ error: 'Invalid Reserva ID' });
    }

    const query = { _id: ObjectId(ReservaId) };
    const update = {
        $set: {
            FechaS,
            HoraS,
            LugarE,
            FechaE,
            HoraE,
            Edad,
            Vehiculo,
            nombre,
            apellidos,
            Pais,
            telefono,
            correo
        }
    };

    db.Usuario.updateOne(query, update, (err, result) => {
        if (err) return next(err);

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Reserva not found' });
        }

        if (result.modifiedCount === 0) {
            return res.status(304).json({ message: 'No changes made' });
        }

        res.json({ message: 'Reserva updated successfully' });
    });
});

module.exports = router;
