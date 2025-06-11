import { useState } from 'react';
import { motion } from 'framer-motion';
import portada from '../assets/f1-love.jpg';

export default function InvitacionF1() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <img src={portada} alt="F1 Love" className="w-64 rounded-xl mb-12 shadow-lg" />

      <motion.div
        className="relative w-72 h-52 perspective"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: abierto ? 180 : 0 }}
        transition={{ duration: 2 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {!abierto && (
          <motion.div
            className="absolute w-full h-full bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-lg font-semibold border-4 border-white"
            style={{ backfaceVisibility: 'hidden' }}
          >
            💌 ¡Haz clic en abrir sobre!
          </motion.div>
        )}

        {abierto && (
          <motion.div
            className="absolute w-[300px] h-[235px] bg-white rounded-2xl shadow-2xl p-4 flex flex-col justify-center items-center text-center border-2 border-gray-200"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}
          >
            <h2 className="text-xl font-semibold text-pink-700 mb-2">🎬 Invitación Especial</h2>
            <p className="text-black mb-1">Para mi chica de sonrisa preciosa 💕</p>
            <p className="text-black mb-1">¿Te gustaría ver conmigo la película de F1?</p>
            <p className="text-black mb-1">📅 27 de junio de 2024</p>
            <p className="text-black">Será una cita maravillosa y por supuesto que habrán palomitas, icee, nachos jaja 🏁❤️</p>
            <p className="text black mb-1">¿Es un si?👩🏽‍❤️‍👨🏽</p>
          </motion.div>
        )}
      </motion.div>

      {!abierto && (
        <button onClick={() => setAbierto(true)} className="mt-6 text-white bg-gradient-to-r from-pink-500 to-red-600 hover:opacity-90 px-4 py-2 rounded-full shadow-lg">
          Abrir Sobre
        </button>
      )}
    </div>
  );
}
