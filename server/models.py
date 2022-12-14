import secrets
from datetime import timezone

import arrow
from tortoise import fields, models, ForeignKeyFieldInstance
from tortoise.queryset import QuerySet
import nanoid  # type: ignore


# user model
class User(models.Model):
    # id created_at updated_at deleted
    id = fields.CharField(max_length=21, pk=True, default=nanoid.generate)
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)
    deleted = fields.BooleanField(default=False)

    # user info
    username = fields.CharField(max_length=255, unique=True)
    password = fields.CharField(max_length=255)
    tasks: QuerySet["Task"]
    refresh_tokens: QuerySet["RefreshToken"]


class RefreshToken(models.Model):
    @staticmethod
    def generate_token() -> str:
        return secrets.token_urlsafe(32)

    @staticmethod
    def generate_expiry_time():
        now = arrow.utcnow()
        return now.shift(days=+7).datetime.replace(tzinfo=timezone.utc)

    refresh_token = fields.CharField(
        unique=True, max_length=255, default=generate_token, pk=True
    )
    user: ForeignKeyFieldInstance["User"] = fields.ForeignKeyField(
        "models.User", related_name="refresh_tokens"
    )
    expires_at = fields.DatetimeField(default=generate_expiry_time)

    @property
    def expired(self):
        now = arrow.utcnow()
        expires_at = arrow.get(self.expires_at)
        return now > expires_at


# task model
class Task(models.Model):
    @staticmethod
    def generate_due_date():
        dt = arrow.utcnow().shift(days=2).datetime.replace(tzinfo=timezone.utc)
        return dt

    # id created_at updated_at deleted
    id = fields.CharField(max_length=21, pk=True, default=nanoid.generate)
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)
    deleted = fields.BooleanField(default=False)

    # task info
    task = fields.CharField(max_length=255)
    done = fields.BooleanField(default=False)
    due = fields.DatetimeField(default=generate_due_date)
    user: ForeignKeyFieldInstance[User] = fields.ForeignKeyField(
        "models.User", related_name="tasks", on_delete=fields.CASCADE
    )
