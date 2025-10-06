'use client';

import { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// Generate apartment options
const generateApartmentOptions = () => {
  const options = [];

  // Tower A - 1st floor
  const towerAFirstFloor = [101, 102, 103, 105, 106, 107, 108];
  towerAFirstFloor.forEach(num => options.push(num.toString()));

  // Tower A - floors 2-12
  for (let floor = 2; floor <= 12; floor++) {
    for (let apt = 1; apt <= 8; apt++) {
      const aptNum = floor * 100 + apt;
      options.push(aptNum.toString());
    }
  }

  // Tower B - 1st floor
  const towerBFirstFloor = [109, 110, 111, 112, 113, 115, 116];
  towerBFirstFloor.forEach(num => options.push(num.toString()));

  return options;
};

const apartmentOptions = generateApartmentOptions();

interface Member {
  name: string;
  email: string;
  phone: string;
  photo: File | null;
}

export default function RegistrationForm() {
  const [showForm, setShowForm] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);

  const [apartmentNumber, setApartmentNumber] = useState('');
  const [manualApartment, setManualApartment] = useState('');
  const [useManual, setUseManual] = useState(false);
  const [headEmail, setHeadEmail] = useState('');
  const [headPhone, setHeadPhone] = useState('');
  const [headPassword, setHeadPassword] = useState('');
  const [headName, setHeadName] = useState('');
  const [headPhoto, setHeadPhoto] = useState<File | null>(null);
  const [additionalMembers, setAdditionalMembers] = useState<Member[]>([]);
  const [comments, setComments] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Generate 7 numbers: 6 random, one 1460
    const randomNumbers: number[] = [];
    while (randomNumbers.length < 6) {
      const num = Math.floor(Math.random() * 1000) + 1000; // 1000-1999
      if (num !== 1460 && !randomNumbers.includes(num)) {
        randomNumbers.push(num);
      }
    }
    const allNumbers = [...randomNumbers, 1460];
    // Shuffle
    for (let i = allNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }
    setNumbers(allNumbers);
  }, []);

  const handleNumberClick = (num: number) => {
    if (num === 1460) {
      setShowForm(true);
    } else {
      alert('Número incorrecto. Inténtalo de nuevo.');
      // Regenerate numbers
      const randomNumbers: number[] = [];
      while (randomNumbers.length < 6) {
        const n = Math.floor(Math.random() * 1000) + 1000;
        if (n !== 1460 && !randomNumbers.includes(n)) {
          randomNumbers.push(n);
        }
      }
      const allNumbers = [...randomNumbers, 1460];
      for (let i = allNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
      }
      setNumbers(allNumbers);
    }
  };

  const addMember = () => {
    if (additionalMembers.length < 4) {
      setAdditionalMembers([...additionalMembers, { name: '', email: '', phone: '', photo: null }]);
    }
  };

  const removeMember = (index: number) => {
    setAdditionalMembers(additionalMembers.filter((_, i) => i !== index));
  };

  const updateAdditionalMember = (index: number, field: keyof Member, value: string | File | null) => {
    const newMembers = [...additionalMembers];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setAdditionalMembers(newMembers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Por favor, completa el reCAPTCHA');
      return;
    }

    // Validation
    const finalApartment = useManual ? manualApartment : apartmentNumber;
    if (!finalApartment) {
      alert('Por favor, selecciona o ingresa un número de apartamento');
      return;
    }

    if (!headName || !headEmail || !headPhone || !headPassword) {
      alert('Los campos del jefe de hogar son obligatorios');
      return;
    }

    if (headPassword.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Check at least one additional member has email and phone
    const hasValidAdditional = additionalMembers.some(m => m.email && m.phone);
    if (!hasValidAdditional) {
      alert('Al menos un miembro adicional debe proporcionar email y teléfono');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('apartmentNumber', finalApartment);
    formData.append('headName', headName);
    formData.append('headEmail', headEmail);
    formData.append('headPhone', headPhone);
    formData.append('headPassword', headPassword);
    formData.append('comments', comments);
    formData.append('recaptchaToken', recaptchaToken);

    // Head photo
    if (headPhoto) {
      formData.append('member0Photo', headPhoto);
    }

    // Additional members
    additionalMembers.forEach((member, index) => {
      formData.append(`member${index + 1}Name`, member.name);
      formData.append(`member${index + 1}Email`, member.email);
      formData.append(`member${index + 1}Phone`, member.phone);
      if (member.photo) {
        formData.append(`member${index + 1}Photo`, member.photo);
      }
    });

    try {
      const response = await fetch('/api/registro', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Registro exitoso');
        // Reset form
        setApartmentNumber('');
        setManualApartment('');
        setHeadName('');
        setHeadEmail('');
        setHeadPhone('');
        setHeadPassword('');
        setHeadPhoto(null);
        setAdditionalMembers([]);
        setComments('');
        setRecaptchaToken(null);
        setShowForm(false);
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en el registro');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showForm) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <h1>Verificación de Seguridad</h1>
        <p>Selecciona el número correcto de tu direccion para continuar con el registro:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          {numbers.map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              style={{
                padding: '10px 20px',
                fontSize: '18px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Registro de Residentes</h1>

      {/* Benefits Section */}
      <div style={{
        backgroundColor: '#f0f9ff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #0ea5e9'
      }}>
        <h2 style={{ color: '#0ea5e9', marginBottom: '15px' }}>Beneficios de Registrarte en la Comunidad</h2>
        <ul style={{ lineHeight: '1.6' }}>
          <li><strong>Control de Acceso Seguro:</strong> Gestiona el acceso a tu apartamento de manera eficiente y segura.</li>
          <li><strong>Actualización de Información:</strong> Mantén actualizada la información de la comunidad y recibe notificaciones importantes.</li>
          <li><strong>Transparencia:</strong> Accede a información financiera y administrativa de tu condominio.</li>
          <li><strong>Comunicación Directa:</strong> Recibe avisos y comunicados directamente en tu email.</li>
          <li><strong>Seguridad Mejorada:</strong> Contribuye a un entorno más seguro para todos los residentes.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Apartment Number */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Número de Apartamento *
          </label>
          <div style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="radio"
                name="apartmentInput"
                checked={!useManual}
                onChange={() => setUseManual(false)}
              />
              Seleccionar de lista
            </label>
            <label style={{ marginLeft: '20px' }}>
              <input
                type="radio"
                name="apartmentInput"
                checked={useManual}
                onChange={() => setUseManual(true)}
              />
              Ingresar manualmente
            </label>
          </div>

          {!useManual ? (
            <select
              value={apartmentNumber}
              onChange={(e) => setApartmentNumber(e.target.value)}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="">Selecciona un apartamento</option>
              {apartmentOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={manualApartment}
              onChange={(e) => setManualApartment(e.target.value)}
              placeholder="Ingresa el número de apartamento"
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          )}
        </div>

        {/* Head of Household */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Jefe de Hogar</h3>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Nombre completo *"
              value={headName}
              onChange={(e) => setHeadName(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '5px' }}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <input
              type="email"
              placeholder="Email *"
              value={headEmail}
              onChange={(e) => setHeadEmail(e.target.value)}
              required
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
              type="tel"
              placeholder="Teléfono *"
              value={headPhone}
              onChange={(e) => setHeadPhone(e.target.value)}
              required
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <input
            type="password"
            placeholder="Contraseña (mínimo 6 caracteres) *"
            value={headPassword}
            onChange={(e) => setHeadPassword(e.target.value)}
            required
            minLength={6}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }}
          />
          <div>
            <label>Foto (selfie 📷):</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setHeadPhoto(e.target.files?.[0] || null)}
              style={{ marginLeft: '10px' }}
            />
          </div>
        </div>

        {/* Additional Members */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Miembros Adicionales del Hogar</h3>
          <div style={{ marginBottom: '10px' }}>
            <button
              type="button"
              onClick={addMember}
              disabled={additionalMembers.length >= 4}
              style={{
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: additionalMembers.length >= 4 ? 'not-allowed' : 'pointer',
                marginRight: '10px'
              }}
            >
              +
            </button>
            <span>Agregar Miembro</span>
          </div>
          {additionalMembers.map((member, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h4>Miembro Adicional {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  -
                </button>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={member.name}
                  onChange={(e) => updateAdditionalMember(index, 'name', e.target.value)}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '5px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={member.email}
                  onChange={(e) => updateAdditionalMember(index, 'email', e.target.value)}
                  style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={member.phone}
                  onChange={(e) => updateAdditionalMember(index, 'phone', e.target.value)}
                  style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>

              <div>
                <label>Foto (selfie 📷):</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => updateAdditionalMember(index, 'photo', e.target.files?.[0] || null)}
                  style={{ marginLeft: '10px' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Comments */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Comentarios (opcional)
          </label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows={4}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        {/* reCAPTCHA */}
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            onChange={(token) => setRecaptchaToken(token)}
          />
        </div>

        {/* Submit */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '4px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            {isSubmitting ? 'Registrando...' : 'Registrar'}
          </button>
        </div>
      </form>
    </div>
  );
}