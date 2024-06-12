import { Schema, model, Document } from 'mongoose';

interface IBooking extends Document {
    date: Date;
    user: Schema.Types.ObjectId;
    car: Schema.Types.ObjectId;
    startTime: string;
    endTime: string | null;
    totalCost: number;
    isBooked: string;
}

const bookingSchema = new Schema<IBooking>({
    body: ({
        date: { type: Date, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, default: null },
        totalCost: { type: Number, default: 0 },
        isBooked: { type: String, default: 'unconfirmed' }
    })
}, { timestamps: true });

export const Booking = model<IBooking>('Booking', bookingSchema);


